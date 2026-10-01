

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


describe('SafelistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.Safelist()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'safelist.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":false,"sh":"The phone number or phone number 1k prefix in SafeList.","t":"`$STRING`","key$":"phone_number","index$":0},"sid":{"a":true,"h":"Sid","n":"sid","r":false,"sh":"The unique string that we created to identify the SafeList resource.","t":"`$STRING`","key$":"sid","index$":1}},"name":"safelist","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/SafeList/Numbers","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/SafeList/Numbers","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"SafeList"},{"lit":"Numbers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/SafeList/Numbers","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"+18001234567","k":"query","n":"phone_number","or":"PhoneNumber","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/SafeList/Numbers","q":{"exist":["phone_number"]},"r":{},"s":[{"lit":"v1"},{"lit":"SafeList"},{"lit":"Numbers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"safelist","name__orig":"safelist","Name":"Safelist","name_":"safelist","name-":"safelist","NAME":"SAFELIST","index$":9}, {"active":true,"entity":"safelist","key$":"BasicSafelistFlow","kind":"basic","name":"BasicSafelistFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"safelist_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"safelist_ref01","srcdatavar":"safelist_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-safelist_ref01"}}]}]}, 'Safelist', {"POST /v1/SafeList/Numbers":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"CreateSafelistRequest","properties":{"PhoneNumber":{"type":"string","description":"The phone number or phone number 1k prefix to be added in SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164)."}},"required":["PhoneNumber"]},"examples":{"create":{"value":{"PhoneNumber":"+18001234567"}}}}}},"parameters":[]},"GET /v1/SafeList/Numbers":{"protocol":"http","parameters":[{"name":"PhoneNumber","in":"query","description":"The phone number or phone number 1k prefix to be fetched from SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).","schema":{"type":"string"},"x-twilio":{"pii":{"handling":"standard","deleteSla":0}},"examples":{"fetch":{"value":"+18001234567"}},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const safelist_ref01_ent = client.Safelist()
    let safelist_ref01_data = setup.data.new.safelist['safelist_ref01']

    safelist_ref01_data = (await safelist_ref01_ent.create(safelist_ref01_data)).data()
    assert(null != safelist_ref01_data)


    // LOAD
    const safelist_ref01_match_dt0: any = {}
    const safelist_ref01_data_dt0 = (await safelist_ref01_ent.load(safelist_ref01_match_dt0)).data()
    assert(null != safelist_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/safelist/SafelistTestData.json')

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
    ['safelist01','safelist02','safelist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_SAFELIST_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_SAFELIST_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_SAFELIST_ENTID']
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
  
