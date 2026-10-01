

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


describe('AccountsV1SecondaryAuthTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.AccountsV1SecondaryAuthToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'accounts_v1_secondary_auth_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"accounts_v1_secondary_auth_token","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/AuthTokens/Secondary","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"suppress_email_notification","or":"SuppressEmailNotification","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/AuthTokens/Secondary","q":{"exist":["suppress_email_notification"]},"r":{},"s":[{"lit":"v1"},{"lit":"AuthTokens"},{"lit":"Secondary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"accounts_v1_secondary_auth_token","name__orig":"accounts_v1_secondary_auth_token","Name":"AccountsV1SecondaryAuthToken","name_":"accounts_v1_secondary_auth_token","name-":"accounts-v1-secondary-auth-token","NAME":"ACCOUNTS_V1_SECONDARY_AUTH_TOKEN","index$":3}, {"active":true,"entity":"accounts_v1_secondary_auth_token","key$":"BasicAccountsV1SecondaryAuthTokenFlow","kind":"basic","name":"BasicAccountsV1SecondaryAuthTokenFlow","param":{},"step":[]}, 'AccountsV1SecondaryAuthToken', {"DELETE /v1/AuthTokens/Secondary":{"protocol":"http","parameters":[{"name":"SuppressEmailNotification","in":"query","description":"Whether to suppress the email notification that Twilio sends to the owners and administrators of the account about this Auth Token change. Defaults to `false`, so Twilio sends the email. Set to `true` when rotating Auth Tokens across many subaccounts.","schema":{"type":"boolean"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let accounts_v1_secondary_auth_token_ref01_data = Object.values(setup.data.existing.accounts_v1_secondary_auth_token)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/accounts_v1_secondary_auth_token/AccountsV1SecondaryAuthTokenTestData.json')

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
    ['accounts_v1_secondary_auth_token01','accounts_v1_secondary_auth_token02','accounts_v1_secondary_auth_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_ACCOUNTS_V1_SECONDARY_AUTH_TOKEN_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_ACCOUNTS_V1_SECONDARY_AUTH_TOKEN_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_ACCOUNTS_V1_SECONDARY_AUTH_TOKEN_ENTID']
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
  
