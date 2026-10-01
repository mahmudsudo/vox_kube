

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


describe('AccountsV1AwEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TWILLIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TWILLIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TwillioSDK.test()
    const ent = testsdk.AccountsV1Aw()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TWILLIO_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'accounts_v1_aw.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_sid":{"a":true,"h":"Account Sid","n":"account_sid","r":false,"sh":"The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.","t":"`$STRING`","key$":"account_sid","index$":0},"date_created":{"a":true,"fo":"date-time","h":"Date Created","n":"date_created","r":false,"sh":"The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.","t":"`$STRING`","key$":"date_created","index$":1},"date_updated":{"a":true,"fo":"date-time","h":"Date Updated","n":"date_updated","r":false,"sh":"The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.","t":"`$STRING`","key$":"date_updated","index$":2},"friendly_name":{"a":true,"h":"Friendly Name","n":"friendly_name","r":false,"sh":"The string that you assigned to describe the resource.","t":"`$STRING`","key$":"friendly_name","index$":3},"sid":{"a":true,"h":"Sid","n":"sid","r":false,"sh":"The unique string that we created to identify the AWS resource.","t":"`$STRING`","key$":"sid","index$":4},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"The URI for this resource, relative to `https://accounts.twilio.com`","t":"`$STRING`","key$":"url","index$":5}},"name":"accounts_v1_aw","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/Credentials/AWS","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/Credentials/AWS","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"Credentials"},{"lit":"AWS"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/Credentials/AWS","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"Page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"PageSize","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_token","or":"PageToken","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v1/Credentials/AWS","q":{"exist":["page","page_size","page_token"]},"r":{},"s":[{"lit":"v1"},{"lit":"Credentials"},{"lit":"AWS"}],"t":{"req":"`reqdata`","res":"`body.credentials`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/Credentials/AWS/{Sid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"sid","or":"Sid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/Credentials/AWS/{Sid}","q":{"exist":["sid"]},"r":{"param":{"Sid":"sid"}},"s":[{"lit":"v1"},{"lit":"Credentials"},{"lit":"AWS"},{"var":"sid"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"accounts_v1_aw","name__orig":"accounts_v1_aw","Name":"AccountsV1Aw","name_":"accounts_v1_aw","name-":"accounts-v1-aw","NAME":"ACCOUNTS_V1_AW","index$":0}, {"active":true,"entity":"accounts_v1_aw","key$":"BasicAccountsV1AwFlow","kind":"basic","name":"BasicAccountsV1AwFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"accounts_v1_aw_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"accounts_v1_aw_ref01"}}]},{"a":true,"d":{},"i":{"ref":"accounts_v1_aw_ref01","suffix":"_rm0"},"m":{"id":"accounts_v1_aw01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"accounts_v1_aw_ref01"}}]}]}, 'AccountsV1Aw', {"POST /v1/Credentials/AWS":{"protocol":"http","requestBody":{"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","title":"CreateCredentialAwsRequest","properties":{"Credentials":{"type":"string","description":"A string that contains the AWS access credentials in the format `<AWS_ACCESS_KEY_ID>:<AWS_SECRET_ACCESS_KEY>`. For example, `AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`"},"FriendlyName":{"type":"string","description":"A descriptive string that you create to describe the resource. It can be up to 64 characters long."},"AccountSid":{"type":"string","minLength":34,"maxLength":34,"pattern":"^AC[0-9a-fA-F]{32}$","description":"The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request."}},"required":["Credentials"]},"examples":{"create":{"value":{"AccountSid":"ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","FriendlyName":"friendly_name","Credentials":"aws_credentials"}}}}}},"parameters":[]},"GET /v1/Credentials/AWS":{"protocol":"http","parameters":[{"name":"PageSize","in":"query","description":"How many resources to return in each list page. The default is 50, and the maximum is 1000.","schema":{"type":"integer","format":"int64","minimum":1,"maximum":1000},"index$":0},{"name":"Page","in":"query","description":"The page index. This value is simply for client state.","schema":{"type":"integer","minimum":0},"index$":1},{"name":"PageToken","in":"query","description":"The page token. This is provided by the API.","schema":{"type":"string"},"index$":2}]},"DELETE /v1/Credentials/AWS/{Sid}":{"protocol":"http","parameters":[{"name":"Sid","in":"path","description":"The Twilio-provided string that uniquely identifies the AWS resource to delete.","schema":{"type":"string","minLength":34,"maxLength":34,"pattern":"^CR[0-9a-fA-F]{32}$"},"required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const accounts_v1_aw_ref01_ent = client.AccountsV1Aw()
    let accounts_v1_aw_ref01_data = setup.data.new.accounts_v1_aw['accounts_v1_aw_ref01']

    accounts_v1_aw_ref01_data = (await accounts_v1_aw_ref01_ent.create(accounts_v1_aw_ref01_data)).data()
    assert(null != accounts_v1_aw_ref01_data)


    // LIST
    const accounts_v1_aw_ref01_match: any = {}

    const accounts_v1_aw_ref01_list = (await accounts_v1_aw_ref01_ent.list(accounts_v1_aw_ref01_match)).map((e: any) => e.data())



    // LIST
    const accounts_v1_aw_ref01_match_rt0: any = {}

    const accounts_v1_aw_ref01_list_rt0 = (await accounts_v1_aw_ref01_ent.list(accounts_v1_aw_ref01_match_rt0)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/accounts_v1_aw/AccountsV1AwTestData.json')

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
    ['accounts_v1_aw01','accounts_v1_aw02','accounts_v1_aw03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TWILLIO_TEST_ACCOUNTS_V1_AW_ENTID': idmap,
    'TWILLIO_TEST_LIVE': 'FALSE',
    'TWILLIO_TEST_EXPLAIN': 'FALSE',
    'TWILLIO_APIKEY': '',
    'TWILLIO_SECRET': '',
  })

  idmap = env['TWILLIO_TEST_ACCOUNTS_V1_AW_ENTID']

  const live = 'TRUE' === env.TWILLIO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TWILLIO_TEST_ACCOUNTS_V1_AW_ENTID']
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
  
