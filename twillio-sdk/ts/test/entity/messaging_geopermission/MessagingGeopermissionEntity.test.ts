

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


describe('MessagingGeopermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.MessagingGeopermission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'messaging_geopermission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"sh":"A list of objects where each object represents the result of processing a messaging Geo Permission.","t":"`$ANY`","key$":"permissions","index$":0}},"name":"messaging_geopermission","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/Messaging/GeoPermissions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"IN,PK,US","k":"query","n":"country_code","or":"CountryCode","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/Messaging/GeoPermissions","q":{"exist":["country_code"]},"r":{},"s":[{"lit":"v1"},{"lit":"Messaging"},{"lit":"GeoPermissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/Messaging/GeoPermissions","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/v1/Messaging/GeoPermissions","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"Messaging"},{"lit":"GeoPermissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"messaging_geopermission","name__orig":"messaging_geopermission","Name":"MessagingGeopermission","name_":"messaging_geopermission","name-":"messaging-geopermission","NAME":"MESSAGING_GEOPERMISSION","index$":8}, {"active":true,"entity":"messaging_geopermission","key$":"BasicMessagingGeopermissionFlow","kind":"basic","name":"BasicMessagingGeopermissionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"messaging_geopermission_ref01","srcdatavar":"messaging_geopermission_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-messaging_geopermission_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"messaging_geopermission_ref01","srcdatavar":"messaging_geopermission_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-messaging_geopermission_ref01"}}]}]}, 'MessagingGeopermission', {"GET /v1/Messaging/GeoPermissions":{"protocol":"http","parameters":[{"name":"CountryCode","in":"query","description":"The country code to filter the geo permissions. If provided, only the geo permission for the specified country will be returned.","schema":{"type":"string"},"examples":{"get":{"value":"IN,PK,US"}},"index$":0}]},"PATCH /v1/Messaging/GeoPermissions":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"UpdateMessagingGeopermissionsRequest","properties":{"Permissions":{"type":"array","items":{},"description":"A list of objects where each object represents the Geo Permission to be updated. Each object contains the following fields: `country_code`, unique code for each country of Geo Permission; `type`, permission type of the Geo Permission i.e. country; `enabled`, configure true for enabling the Geo Permission, false for disabling the Geo Permission."}},"required":["Permissions"]},"examples":{"update":{"value":{"Permissions":["{\"country_code\": \"IN\",\"type\": \"country\", \"enabled\": false}","{\"country_code\": \"PK\",\"type\": \"country\", \"enabled\": true}"]}}}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let messaging_geopermission_ref01_data = Object.values(setup.data.existing.messaging_geopermission)[0] as any

    // UPDATE
    const messaging_geopermission_ref01_ent = client.MessagingGeopermission()
    const messaging_geopermission_ref01_data_up0: any = {}

    const messaging_geopermission_ref01_resdata_up0 = (await messaging_geopermission_ref01_ent.update(messaging_geopermission_ref01_data_up0)).data()
    assert(null != messaging_geopermission_ref01_resdata_up0)


    // LOAD
    const messaging_geopermission_ref01_match_dt0: any = {}
    const messaging_geopermission_ref01_data_dt0 = (await messaging_geopermission_ref01_ent.load(messaging_geopermission_ref01_match_dt0)).data()
    assert(null != messaging_geopermission_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/messaging_geopermission/MessagingGeopermissionTestData.json')

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
    ['messaging_geopermission01','messaging_geopermission02','messaging_geopermission03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_MESSAGING_GEOPERMISSION_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_MESSAGING_GEOPERMISSION_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_MESSAGING_GEOPERMISSION_ENTID']
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
  
