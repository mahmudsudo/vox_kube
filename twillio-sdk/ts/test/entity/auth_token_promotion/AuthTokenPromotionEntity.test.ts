

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


describe('AuthTokenPromotionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.AuthTokenPromotion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'auth_token_promotion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_sid":{"a":true,"h":"Account Sid","n":"account_sid","r":false,"sh":"The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.","t":"`$STRING`","key$":"account_sid","index$":0},"auth_token":{"a":true,"h":"Auth Token","n":"auth_token","r":false,"sh":"The promoted Auth Token that must be used to authenticate future API requests.","t":"`$STRING`","key$":"auth_token","index$":1},"date_created":{"a":true,"fo":"date-time","h":"Date Created","n":"date_created","r":false,"sh":"The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.","t":"`$STRING`","key$":"date_created","index$":2},"date_updated":{"a":true,"fo":"date-time","h":"Date Updated","n":"date_updated","r":false,"sh":"The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.","t":"`$STRING`","key$":"date_updated","index$":3},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"The URI for this resource, relative to `https://accounts.twilio.com`","t":"`$STRING`","key$":"url","index$":4}},"name":"auth_token_promotion","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/AuthTokens/Promote","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/AuthTokens/Promote","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"AuthTokens"},{"lit":"Promote"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"auth_token_promotion","name__orig":"auth_token_promotion","Name":"AuthTokenPromotion","name_":"auth_token_promotion","name-":"auth-token-promotion","NAME":"AUTH_TOKEN_PROMOTION","index$":4}, {"active":true,"entity":"auth_token_promotion","key$":"BasicAuthTokenPromotionFlow","kind":"basic","name":"BasicAuthTokenPromotionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"auth_token_promotion_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'AuthTokenPromotion', {"POST /v1/AuthTokens/Promote":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"UpdateAuthTokenPromotionRequest","properties":{"SuppressEmailNotification":{"type":"boolean","description":"Whether to suppress the email notification that Twilio sends to the owners and administrators of the account about this Auth Token change. Defaults to `false`, so Twilio sends the email. Set to `true` when rotating Auth Tokens across many subaccounts."}}},"examples":{"updateWithoutNotification":{"value":{"SuppressEmailNotification":true}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const auth_token_promotion_ref01_ent = client.AuthTokenPromotion()
    let auth_token_promotion_ref01_data = setup.data.new.auth_token_promotion['auth_token_promotion_ref01']

    auth_token_promotion_ref01_data = (await auth_token_promotion_ref01_ent.create(auth_token_promotion_ref01_data)).data()
    assert(null != auth_token_promotion_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/auth_token_promotion/AuthTokenPromotionTestData.json')

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
    ['auth_token_promotion01','auth_token_promotion02','auth_token_promotion03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_AUTH_TOKEN_PROMOTION_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_AUTH_TOKEN_PROMOTION_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_AUTH_TOKEN_PROMOTION_ENTID']
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
  
