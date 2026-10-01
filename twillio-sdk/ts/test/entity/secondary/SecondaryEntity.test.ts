

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TwillioSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SecondaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.Secondary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'secondary.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_sid":{"a":true,"h":"Account Sid","n":"account_sid","r":false,"t":"`$STRING`","key$":"account_sid","index$":0},"date_created":{"a":true,"h":"Date Created","n":"date_created","r":false,"t":"`$STRING`","key$":"date_created","index$":1},"date_updated":{"a":true,"h":"Date Updated","n":"date_updated","r":false,"t":"`$STRING`","key$":"date_updated","index$":2},"secondary_auth_token":{"a":true,"h":"Secondary Auth Token","n":"secondary_auth_token","r":false,"t":"`$STRING`","key$":"secondary_auth_token","index$":3},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":4}},"name":"secondary","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/AuthTokens/Secondary","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/AuthTokens/Secondary","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"AuthTokens"},{"lit":"Secondary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"secondary","name__orig":"secondary","Name":"Secondary","name_":"secondary","name-":"secondary","NAME":"SECONDARY","index$":10}, {"active":true,"entity":"secondary","key$":"BasicSecondaryFlow","kind":"basic","name":"BasicSecondaryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"secondary_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'Secondary', {"POST /v1/AuthTokens/Secondary":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"CreateSecondaryAuthTokenRequest","properties":{"SuppressEmailNotification":{"type":"boolean","description":"Whether to suppress the email notification that Twilio sends to the owners and administrators of the account about this Auth Token change. Defaults to `false`, so Twilio sends the email. Set to `true` when rotating Auth Tokens across many subaccounts."}}},"examples":{"createWithoutNotification":{"value":{"SuppressEmailNotification":true}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const secondary_ref01_ent = client.Secondary()
    let secondary_ref01_data = setup.data.new.secondary['secondary_ref01']

    secondary_ref01_data = (await secondary_ref01_ent.create(secondary_ref01_data)).data()
    assert(null != secondary_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/secondary/SecondaryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TwillioSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['secondary01','secondary02','secondary03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_SECONDARY_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_SECONDARY_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_SECONDARY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TwillioSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TWILLIO_APIKEY,
        secret: env.TWILLIO_SECRET,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.TWILLIO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
