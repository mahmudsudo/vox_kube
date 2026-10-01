

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


describe('EvictionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.Eviction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'eviction.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiVersion":{"a":true,"h":"Api Version","n":"apiVersion","r":false,"sh":"APIVersion defines the versioned schema of this representation of an object.","t":"`$STRING`","key$":"apiVersion","index$":0},"deleteOptions":{"a":true,"h":"Delete Options","n":"deleteOptions","r":false,"sh":"deleteOptions may be provided","t":"`$ANY`","key$":"deleteOptions","index$":1},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind is a string value representing the REST resource this object represents.","t":"`$STRING`","key$":"kind","index$":2},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"metadata describes the pod that is being evicted.","t":"`$ANY`","key$":"metadata","index$":3}},"name":"eviction","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/namespaces/{namespace}/pods/{name}/eviction","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"POST","o":"/api/v1/namespaces/{namespace}/pods/{name}/eviction","q":{"exist":["dry_run","field_manager","field_validation","name","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"pods"},{"var":"name"},{"lit":"eviction"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.namespace","$.main.kit.entity.pod"]]},"key$":"eviction","name__orig":"eviction","Name":"Eviction","name_":"eviction","name-":"eviction","NAME":"EVICTION","index$":9}, {"active":true,"entity":"eviction","key$":"BasicEvictionFlow","kind":"basic","name":"BasicEvictionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"eviction_ref01"},"m":{"name":"name01","namespace_id":"namespace01"},"o":"create","s":[],"v":[]}]}, 'Eviction', {"POST /api/v1/namespaces/{namespace}/pods/{name}/eviction":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","type":"string","key$":"apiVersion"},"deleteOptions":{"allOf":[{"description":"DeleteOptions may be provided when deleting an API object.","properties":{"apiVersion":{},"dryRun":{},"gracePeriodSeconds":{},"ignoreStoreReadErrorWithClusterBreakingPotential":{},"kind":{},"orphanDependents":{},"preconditions":{},"propagationPolicy":{}},"type":"object","x-kubernetes-group-version-kind":[{}],"x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"}],"description":"deleteOptions may be provided","key$":"deleteOptions"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","type":"string","key$":"kind"},"metadata":{"allOf":[{"description":"ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.","properties":{"annotations":{},"creationTimestamp":{},"deletionGracePeriodSeconds":{},"deletionTimestamp":{},"finalizers":{},"generateName":{},"generation":{},"labels":{},"managedFields":{},"name":{},"namespace":{},"ownerReferences":{},"resourceVersion":{},"selfLink":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"}],"default":{},"description":"metadata describes the pod that is being evicted.","key$":"metadata"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"policy","kind":"Eviction","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.api.policy.v1.Eviction"}}},"required":true},"parameters":[{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"name of the Eviction","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":4},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const eviction_ref01_ent = client.Eviction()
    let eviction_ref01_data = setup.data.new.eviction['eviction_ref01']
    eviction_ref01_data['name'] = setup.idmap['name01']
    eviction_ref01_data['namespace_id'] = setup.idmap['namespace01']

    eviction_ref01_data = (await eviction_ref01_ent.create(eviction_ref01_data)).data()
    assert(null != eviction_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/eviction/EvictionTestData.json')

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
    ['eviction01','eviction02','eviction03','namespace01','namespace02','namespace03','pod01','pod02','pod03','name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_EVICTION_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_EVICTION_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_EVICTION_ENTID']
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
  
