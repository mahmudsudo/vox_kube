

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KubernetesSDK, BaseFeature, stdutil } from '../../..'

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


describe('ApiResourceListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.ApiResourceList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_resource_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"categories":{"a":true,"h":"Categories","n":"categories","r":false,"sh":"categories is a list of the grouped resources this resource belongs to (e.g.","t":"`$ARRAY`","key$":"categories","index$":0},"group":{"a":true,"h":"Group","n":"group","r":false,"sh":"group is the preferred group of the resource.","t":"`$STRING`","key$":"group","index$":1},"kind":{"a":true,"h":"Kind","n":"kind","r":true,"sh":"kind is the kind for the resource (e.g.","t":"`$STRING`","key$":"kind","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"name is the plural name of the resource.","t":"`$STRING`","key$":"name","index$":3},"namespaced":{"a":true,"h":"Namespaced","n":"namespaced","r":true,"sh":"namespaced indicates if a resource is namespaced or not.","t":"`$BOOLEAN`","key$":"namespaced","index$":4},"shortNames":{"a":true,"h":"Short Names","n":"shortNames","r":false,"sh":"shortNames is a list of suggested short names of the resource.","t":"`$ARRAY`","key$":"shortNames","index$":5},"singularName":{"a":true,"h":"Singular Name","n":"singularName","r":true,"sh":"singularName is the singular name of the resource.","t":"`$STRING`","key$":"singularName","index$":6},"storageVersionHash":{"a":true,"h":"Storage Version Hash","n":"storageVersionHash","r":false,"sh":"The hash value of the storage version, the version this resource is converted to when written to the data store.","t":"`$STRING`","key$":"storageVersionHash","index$":7},"verbs":{"a":true,"h":"Verbs","n":"verbs","r":true,"sh":"verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)","t":"`$ARRAY`","key$":"verbs","index$":8},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"version is the preferred version of the resource.","t":"`$STRING`","key$":"version","index$":9}},"name":"api_resource_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v1/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v1"}],"t":{"req":"`reqdata`","res":"`body.resources`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_resource_list","name__orig":"api_resource_list","Name":"ApiResourceList","name_":"api_resource_list","name-":"api-resource-list","NAME":"API_RESOURCE_LIST","index$":0}, {"active":true,"entity":"api_resource_list","key$":"BasicApiResourceListFlow","kind":"basic","name":"BasicApiResourceListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_resource_list_ref01"}}]}]}, 'ApiResourceList', {"GET /api/v1/":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_resource_list_ref01_data = Object.values(setup.data.existing.api_resource_list)[0] as any

    // LIST
    const api_resource_list_ref01_ent = client.ApiResourceList()
    const api_resource_list_ref01_match: any = {}

    const api_resource_list_ref01_list = (await api_resource_list_ref01_ent.list(api_resource_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_resource_list/ApiResourceListTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = KubernetesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api_resource_list01','api_resource_list02','api_resource_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_API_RESOURCE_LIST_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_API_RESOURCE_LIST_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_API_RESOURCE_LIST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new KubernetesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.KUBERNETES_APIKEY,
        server: {
          base: env.KUBERNETES_SERVER_BASE,
        },
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
    explain: 'TRUE' === env.KUBERNETES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
