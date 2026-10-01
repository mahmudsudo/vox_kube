

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


describe('PersistentVolumeClaimListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.PersistentVolumeClaimList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'persistent_volume_claim_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiVersion":{"a":true,"h":"Api Version","n":"apiVersion","r":false,"sh":"APIVersion defines the versioned schema of this representation of an object.","t":"`$STRING`","key$":"apiVersion","index$":0},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind is a string value representing the REST resource this object represents.","t":"`$STRING`","key$":"kind","index$":1},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"metadata is the standard object metadata.","t":"`$ANY`","key$":"metadata","index$":2},"spec":{"a":true,"h":"Spec","n":"spec","r":false,"sh":"spec defines the desired characteristics of a volume requested by a pod author.","t":"`$ANY`","union":{"branches":2,"count":2,"depth":9},"key$":"spec","index$":3},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"status represents the current information/status of a persistent volume claim.","t":"`$ANY`","union":{"branches":2,"count":2,"depth":5},"key$":"status","index$":4}},"name":"persistent_volume_claim_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v1/namespaces/{namespace}/persistentvolumeclaims","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"allow_watch_bookmark","or":"allowWatchBookmarks","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"continue","or":"continue","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_selector","or":"fieldSelector","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"label_selector","or":"labelSelector","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"resource_version","or":"resourceVersion","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"resource_version_match","or":"resourceVersionMatch","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"send_initial_event","or":"sendInitialEvents","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"k":"query","n":"shard_selector","or":"shardSelector","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"timeout_second","or":"timeoutSeconds","r":false,"t":"`$INTEGER`","index$":10},{"a":true,"k":"query","n":"watch","or":"watch","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/api/v1/namespaces/{namespace}/persistentvolumeclaims","q":{"exist":["allow_watch_bookmark","continue","field_selector","label_selector","limit","namespace_id","pretty","resource_version","resource_version_match","send_initial_event","shard_selector","timeout_second","watch"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"persistentvolumeclaims"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0},{"a":true,"co":{"id":"GET /api/v1/persistentvolumeclaims","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"allow_watch_bookmark","or":"allowWatchBookmarks","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"continue","or":"continue","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_selector","or":"fieldSelector","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"label_selector","or":"labelSelector","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"resource_version","or":"resourceVersion","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"resource_version_match","or":"resourceVersionMatch","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"send_initial_event","or":"sendInitialEvents","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"k":"query","n":"shard_selector","or":"shardSelector","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"timeout_second","or":"timeoutSeconds","r":false,"t":"`$INTEGER`","index$":10},{"a":true,"k":"query","n":"watch","or":"watch","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/api/v1/persistentvolumeclaims","q":{"exist":["allow_watch_bookmark","continue","field_selector","label_selector","limit","pretty","resource_version","resource_version_match","send_initial_event","shard_selector","timeout_second","watch"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"persistentvolumeclaims"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.namespace"]]},"key$":"persistent_volume_claim_list","name__orig":"persistent_volume_claim_list","Name":"PersistentVolumeClaimList","name_":"persistent_volume_claim_list","name-":"persistent-volume-claim-list","NAME":"PERSISTENT_VOLUME_CLAIM_LIST","index$":17}, {"active":true,"entity":"persistent_volume_claim_list","key$":"BasicPersistentVolumeClaimListFlow","kind":"basic","name":"BasicPersistentVolumeClaimListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"persistent_volume_claim_list_ref01"}}]}]}, 'PersistentVolumeClaimList', {"GET /api/v1/namespaces/{namespace}/persistentvolumeclaims":{"protocol":"http","parameters":[{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.","in":"query","name":"allowWatchBookmarks","schema":{"type":"boolean","uniqueItems":true},"index$":2},{"description":"The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.","in":"query","name":"continue","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"A selector to restrict the list of returned objects by their fields. Defaults to everything.","in":"query","name":"fieldSelector","schema":{"type":"string","uniqueItems":true},"index$":4},{"description":"A selector to restrict the list of returned objects by their labels. Defaults to everything.","in":"query","name":"labelSelector","schema":{"type":"string","uniqueItems":true},"index$":5},{"description":"limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.","in":"query","name":"limit","schema":{"type":"integer","uniqueItems":true},"index$":6},{"description":"resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset","in":"query","name":"resourceVersion","schema":{"type":"string","uniqueItems":true},"index$":7},{"description":"resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset","in":"query","name":"resourceVersionMatch","schema":{"type":"string","uniqueItems":true},"index$":8},{"description":"`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \"Bookmark\" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `\"k8s.io/initial-events-end\": \"true\"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as \"data at least as new as the provided `resourceVersion`\"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as \"consistent read\" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=\"\"` or `resourceVersion=\"0\"` (for backward compatibility reasons) and to false otherwise.","in":"query","name":"sendInitialEvents","schema":{"type":"boolean","uniqueItems":true},"index$":9},{"description":"shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is an alpha field and requires enabling the ShardedListAndWatch feature gate.","in":"query","name":"shardSelector","schema":{"type":"string","uniqueItems":true},"index$":10},{"description":"Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.","in":"query","name":"timeoutSeconds","schema":{"type":"integer","uniqueItems":true},"index$":11},{"description":"Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.","in":"query","name":"watch","schema":{"type":"boolean","uniqueItems":true},"index$":12}]},"GET /api/v1/persistentvolumeclaims":{"protocol":"http","parameters":[{"description":"allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.","in":"query","name":"allowWatchBookmarks","schema":{"type":"boolean","uniqueItems":true},"index$":0},{"description":"The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.","in":"query","name":"continue","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"A selector to restrict the list of returned objects by their fields. Defaults to everything.","in":"query","name":"fieldSelector","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"A selector to restrict the list of returned objects by their labels. Defaults to everything.","in":"query","name":"labelSelector","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.","in":"query","name":"limit","schema":{"type":"integer","uniqueItems":true},"index$":4},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":5},{"description":"resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset","in":"query","name":"resourceVersion","schema":{"type":"string","uniqueItems":true},"index$":6},{"description":"resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset","in":"query","name":"resourceVersionMatch","schema":{"type":"string","uniqueItems":true},"index$":7},{"description":"`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \"Bookmark\" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `\"k8s.io/initial-events-end\": \"true\"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as \"data at least as new as the provided `resourceVersion`\"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as \"consistent read\" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=\"\"` or `resourceVersion=\"0\"` (for backward compatibility reasons) and to false otherwise.","in":"query","name":"sendInitialEvents","schema":{"type":"boolean","uniqueItems":true},"index$":8},{"description":"shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is an alpha field and requires enabling the ShardedListAndWatch feature gate.","in":"query","name":"shardSelector","schema":{"type":"string","uniqueItems":true},"index$":9},{"description":"Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.","in":"query","name":"timeoutSeconds","schema":{"type":"integer","uniqueItems":true},"index$":10},{"description":"Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.","in":"query","name":"watch","schema":{"type":"boolean","uniqueItems":true},"index$":11}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let persistent_volume_claim_list_ref01_data = Object.values(setup.data.existing.persistent_volume_claim_list)[0] as any

    // LIST
    const persistent_volume_claim_list_ref01_ent = client.PersistentVolumeClaimList()
    const persistent_volume_claim_list_ref01_match: any = {}

    const persistent_volume_claim_list_ref01_list = (await persistent_volume_claim_list_ref01_ent.list(persistent_volume_claim_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/persistent_volume_claim_list/PersistentVolumeClaimListTestData.json')

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
    ['persistent_volume_claim_list01','persistent_volume_claim_list02','persistent_volume_claim_list03','namespace01','namespace02','namespace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_PERSISTENT_VOLUME_CLAIM_LIST_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_PERSISTENT_VOLUME_CLAIM_LIST_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_PERSISTENT_VOLUME_CLAIM_LIST_ENTID']
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
  
