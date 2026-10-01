

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


describe('CredentialAwEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.CredentialAw()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'credential_aw.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_sid":{"a":true,"h":"Account Sid","n":"account_sid","r":false,"sh":"The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.","t":"`$STRING`","key$":"account_sid","index$":0},"date_created":{"a":true,"fo":"date-time","h":"Date Created","n":"date_created","r":false,"sh":"The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.","t":"`$STRING`","key$":"date_created","index$":1},"date_updated":{"a":true,"fo":"date-time","h":"Date Updated","n":"date_updated","r":false,"sh":"The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.","t":"`$STRING`","key$":"date_updated","index$":2},"friendly_name":{"a":true,"h":"Friendly Name","n":"friendly_name","r":false,"sh":"The string that you assigned to describe the resource.","t":"`$STRING`","key$":"friendly_name","index$":3},"sid":{"a":true,"h":"Sid","n":"sid","r":false,"sh":"The unique string that we created to identify the AWS resource.","t":"`$STRING`","key$":"sid","index$":4},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"The URI for this resource, relative to `https://accounts.twilio.com`","t":"`$STRING`","key$":"url","index$":5}},"name":"credential_aw","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/Credentials/AWS/{Sid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"sid","or":"Sid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/Credentials/AWS/{Sid}","q":{"exist":["sid"]},"r":{"param":{"Sid":"sid"}},"s":[{"lit":"v1"},{"lit":"Credentials"},{"lit":"AWS"},{"var":"sid"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/Credentials/AWS/{Sid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"sid","or":"Sid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/Credentials/AWS/{Sid}","q":{"exist":["sid"]},"r":{"param":{"Sid":"sid"}},"s":[{"lit":"v1"},{"lit":"Credentials"},{"lit":"AWS"},{"var":"sid"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"credential_aw","name__orig":"credential_aw","Name":"CredentialAw","name_":"credential_aw","name-":"credential-aw","NAME":"CREDENTIAL_AW","index$":6}, {"active":true,"entity":"credential_aw","key$":"BasicCredentialAwFlow","kind":"basic","name":"BasicCredentialAwFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"credential_aw_ref01"},"m":{"sid":"sid01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"credential_aw_ref01","srcdatavar":"credential_aw_ref01_data","suffix":"_dt0"},"m":{"id":"credential_aw01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-credential_aw_ref01"}}]}]}, 'CredentialAw', {"POST /v1/Credentials/AWS/{Sid}":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"UpdateCredentialAwsRequest","properties":{"FriendlyName":{"type":"string","description":"A descriptive string that you create to describe the resource. It can be up to 64 characters long."}}},"examples":{"update":{"value":{"FriendlyName":"friendly_name","Credentials":"aws_credentials"}}}}}},"parameters":[{"name":"Sid","in":"path","description":"The Twilio-provided string that uniquely identifies the AWS resource to update.","schema":{"type":"string","minLength":34,"maxLength":34,"pattern":"^CR[0-9a-fA-F]{32}$"},"required":true,"index$":0}]},"GET /v1/Credentials/AWS/{Sid}":{"protocol":"http","parameters":[{"name":"Sid","in":"path","description":"The Twilio-provided string that uniquely identifies the AWS resource to fetch.","schema":{"type":"string","minLength":34,"maxLength":34,"pattern":"^CR[0-9a-fA-F]{32}$"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const credential_aw_ref01_ent = client.CredentialAw()
    let credential_aw_ref01_data = setup.data.new.credential_aw['credential_aw_ref01']
    credential_aw_ref01_data['sid'] = setup.idmap['sid01']

    credential_aw_ref01_data = (await credential_aw_ref01_ent.create(credential_aw_ref01_data)).data()
    assert(null != credential_aw_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/credential_aw/CredentialAwTestData.json')

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
    ['credential_aw01','credential_aw02','credential_aw03','sid01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_CREDENTIAL_AW_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_CREDENTIAL_AW_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_CREDENTIAL_AW_ENTID']
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
  
