

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


describe('LimitRangeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.LimitRange()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'limit_range.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiVersion":{"a":true,"h":"Api Version","n":"apiVersion","r":false,"sh":"APIVersion defines the versioned schema of this representation of an object.","t":"`$STRING`","key$":"apiVersion","index$":0},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind is a string value representing the REST resource this object represents.","t":"`$STRING`","key$":"kind","index$":1},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"metadata is the standard object's metadata.","t":"`$ANY`","key$":"metadata","index$":2},"spec":{"a":true,"h":"Spec","n":"spec","r":false,"sh":"spec defines the limits enforced.","t":"`$ANY`","union":{"branches":2,"count":5,"depth":8},"key$":"spec","index$":3}},"name":"limit_range","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v1/namespaces/{namespace}/limitranges","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"POST","o":"/api/v1/namespaces/{namespace}/limitranges","q":{"exist":["dry_run","field_manager","field_validation","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"limitranges"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/namespaces/{namespace}/limitranges/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/namespaces/{namespace}/limitranges/{name}","q":{"exist":["name","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"limitranges"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /api/v1/namespaces/{namespace}/limitranges/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"force","or":"force","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"PATCH","o":"/api/v1/namespaces/{namespace}/limitranges/{name}","q":{"exist":["dry_run","field_manager","field_validation","force","name","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"limitranges"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v1/namespaces/{namespace}/limitranges/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/api/v1/namespaces/{namespace}/limitranges/{name}","q":{"exist":["dry_run","field_manager","field_validation","name","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"limitranges"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.namespace"],["$.main.kit.entity.namespace","$.main.kit.entity.limitrange"]]},"key$":"limit_range","name__orig":"limit_range","Name":"LimitRange","name_":"limit_range","name-":"limit-range","NAME":"LIMIT_RANGE","index$":10}, {"active":true,"entity":"limit_range","key$":"BasicLimitRangeFlow","kind":"basic","name":"BasicLimitRangeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"limit_range_ref01"},"m":{"namespace_id":"namespace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{"namespace_id":"namespace01"},"i":{"ref":"limit_range_ref01","srcdatavar":"limit_range_ref01_data","suffix":"_up0","textfield":"apiVersion"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-limit_range_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"limit_range_ref01","srcdatavar":"limit_range_ref01_data","suffix":"_dt0"},"m":{"id":"limit_range01","namespace_id":"namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-limit_range_ref01"}}]}]}, 'LimitRange', {"POST /api/v1/namespaces/{namespace}/limitranges":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"LimitRange sets resource usage limits for each kind of resource in a Namespace.","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","type":"string","key$":"apiVersion"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","type":"string","key$":"kind"},"metadata":{"allOf":[{"description":"ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.","properties":{"annotations":{},"creationTimestamp":{},"deletionGracePeriodSeconds":{},"deletionTimestamp":{},"finalizers":{},"generateName":{},"generation":{},"labels":{},"managedFields":{},"name":{},"namespace":{},"ownerReferences":{},"resourceVersion":{},"selfLink":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"}],"default":{},"description":"metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata","key$":"metadata"},"spec":{"allOf":[{"description":"LimitRangeSpec defines a min/max usage limit for resources that match on kind.","properties":{"limits":{}},"required":["limits"],"type":"object","x-ref":"#/components/schemas/io.k8s.api.core.v1.LimitRangeSpec"}],"default":{},"description":"spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status","key$":"spec"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"","kind":"LimitRange","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.api.core.v1.LimitRange"}}},"required":true},"parameters":[{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":4}]},"GET /api/v1/namespaces/{namespace}/limitranges/{name}":{"protocol":"http","parameters":[{"description":"name of the LimitRange","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":2}]},"PATCH /api/v1/namespaces/{namespace}/limitranges/{name}":{"protocol":"http","requestBody":{"content":{"application/apply-patch+cbor":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/apply-patch+yaml":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/json-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/merge-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/strategic-merge-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}}},"required":true},"parameters":[{"description":"name of the LimitRange","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":4},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":5},{"description":"Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.","in":"query","name":"force","schema":{"type":"boolean","uniqueItems":true},"index$":6}]},"PUT /api/v1/namespaces/{namespace}/limitranges/{name}":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"LimitRange sets resource usage limits for each kind of resource in a Namespace.","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","type":"string","key$":"apiVersion"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","type":"string","key$":"kind"},"metadata":{"allOf":[{"description":"ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.","properties":{"annotations":{},"creationTimestamp":{},"deletionGracePeriodSeconds":{},"deletionTimestamp":{},"finalizers":{},"generateName":{},"generation":{},"labels":{},"managedFields":{},"name":{},"namespace":{},"ownerReferences":{},"resourceVersion":{},"selfLink":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"}],"default":{},"description":"metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata","key$":"metadata"},"spec":{"allOf":[{"description":"LimitRangeSpec defines a min/max usage limit for resources that match on kind.","properties":{"limits":{}},"required":["limits"],"type":"object","x-ref":"#/components/schemas/io.k8s.api.core.v1.LimitRangeSpec"}],"default":{},"description":"spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status","key$":"spec"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"","kind":"LimitRange","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.api.core.v1.LimitRange"}}},"required":true},"parameters":[{"description":"name of the LimitRange","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":4},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const limit_range_ref01_ent = client.LimitRange()
    let limit_range_ref01_data = setup.data.new.limit_range['limit_range_ref01']
    limit_range_ref01_data['namespace_id'] = setup.idmap['namespace01']

    limit_range_ref01_data = (await limit_range_ref01_ent.create(limit_range_ref01_data)).data()
    assert(null != limit_range_ref01_data)


    // UPDATE
    const limit_range_ref01_data_up0: any = {}
    limit_range_ref01_data_up0 ['namespace_id'] = setup.idmap['namespace_id']

    const limit_range_ref01_markdef_up0 = { name: 'apiVersion', value: 'Mark01-limit_range_ref01_' + setup.now }
    ;(limit_range_ref01_data_up0 as any)[limit_range_ref01_markdef_up0.name] = limit_range_ref01_markdef_up0.value

    const limit_range_ref01_resdata_up0 = (await limit_range_ref01_ent.update(limit_range_ref01_data_up0)).data()
    assert(null != limit_range_ref01_resdata_up0)

    assert((limit_range_ref01_resdata_up0 as any)[limit_range_ref01_markdef_up0.name] === limit_range_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/limit_range/LimitRangeTestData.json')

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
    ['limit_range01','limit_range02','limit_range03','namespace01','namespace02','namespace03','limitrange01','limitrange02','limitrange03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_LIMIT_RANGE_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_LIMIT_RANGE_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_LIMIT_RANGE_ENTID']
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
  
