

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


describe('BulkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.Bulk()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bulk.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":0}},"name":"bulk","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/Consents/Bulk","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/Consents/Bulk","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"Consents"},{"lit":"Bulk"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/Contacts/Bulk","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/Contacts/Bulk","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"Contacts"},{"lit":"Bulk"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"bulk","name__orig":"bulk","Name":"Bulk","name_":"bulk","name-":"bulk","NAME":"BULK","index$":5}, {"active":true,"entity":"bulk","key$":"BasicBulkFlow","kind":"basic","name":"BasicBulkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bulk_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'Bulk', {"POST /v1/Consents/Bulk":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"CreateBulkConsentsRequest","properties":{"Items":{"type":"array","items":{},"description":"This is a list of objects that describes a contact's opt-in status. Each object contains the following fields: `contact_id`, which must be a string representing phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164); `correlation_id`, a unique 32-character UUID used to uniquely map the request item with the response item; `sender_id`, which can be either a valid messaging service SID or a from phone number; `status`, a string representing the consent status. Can be one of [`opt-in`, `opt-out`]; `source`, a string indicating the medium through which the consent was collected. Can be one of [`website`, `offline`, `opt-in-message`, `opt-out-message`, `others`]; `date_of_consent`, an optional datetime string field in ISO-8601 format that captures the exact date and time when the user gave or revoked consent. If not provided, it will be empty."}},"required":["Items"]},"examples":{"post":{"value":{"Items":["{\"contact_id\":\"+19999999999\",\"correlation_id\":\"ad388b5a46b33b874b0d41f7226db2ef\",\"sender_id\":\"MG00000000000000000000000000000001\",\"date_of_consent\":\"2025-02-28T10:05:27Z\",\"status\":\"opt-out\",\"source\":\"website\"}","{\"contact_id\":\"+19\",\"correlation_id\":\"02520cfa6c432f0e3ec3a38c122d428d\",\"sender_id\":\"123456\",\"date_of_consent\":\"2025-03-25\",\"status\":\"opt-in\",\"source\":\"opt-in-message\"}"]}}}}}},"parameters":[]},"POST /v1/Contacts/Bulk":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"CreateBulkContactsRequest","properties":{"Items":{"type":"array","items":{},"description":"A list of objects where each object represents a contact's details. Each object includes the following fields: `contact_id`, which must be a string representing phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164); `correlation_id`, a unique 32-character UUID that maps the response to the original request; `country_iso_code`, a string representing the country using the ISO format (e.g., US for the United States); and `zip_code`, a string representing the postal code."}},"required":["Items"]},"examples":{"post":{"value":{"Items":["{\"contact_id\":\"+19999999999\",\"correlation_id\":\"ad388b5a46b33b874b0d41f7226db2eh\",\"country_iso_code\":\"US\",\"zip_code\":\"12345\"}","{\"contact_id\":\"+19\",\"correlation_id\":\"02520cfa6c432f0e3ec3a38c122d428a\",\"country_iso_code\":\"US\",\"zip_code\":\"12345\"}"]}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const bulk_ref01_ent = client.Bulk()
    let bulk_ref01_data = setup.data.new.bulk['bulk_ref01']

    bulk_ref01_data = (await bulk_ref01_ent.create(bulk_ref01_data)).data()
    assert(null != bulk_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bulk/BulkTestData.json')

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
    ['bulk01','bulk02','bulk03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_BULK_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_BULK_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_BULK_ENTID']
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
  
