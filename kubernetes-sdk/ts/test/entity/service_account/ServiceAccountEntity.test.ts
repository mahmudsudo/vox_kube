

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


describe('ServiceAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.ServiceAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'service_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiVersion":{"a":true,"h":"Api Version","n":"apiVersion","r":false,"sh":"APIVersion defines the versioned schema of this representation of an object.","t":"`$STRING`","key$":"apiVersion","index$":0},"automountServiceAccountToken":{"a":true,"h":"Automount Service Account Token","n":"automountServiceAccountToken","r":false,"sh":"automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted.","t":"`$BOOLEAN`","key$":"automountServiceAccountToken","index$":1},"imagePullSecrets":{"a":true,"h":"Image Pull Secrets","n":"imagePullSecrets","r":false,"sh":"imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount.","t":"`$ARRAY`","key$":"imagePullSecrets","index$":2},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind is a string value representing the REST resource this object represents.","t":"`$STRING`","key$":"kind","index$":3},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"metadata is the standard object's metadata.","t":"`$ANY`","key$":"metadata","index$":4},"secrets":{"a":true,"h":"Secrets","n":"secrets","r":false,"sh":"secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use.","t":"`$ARRAY`","key$":"secrets","index$":5}},"name":"service_account","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/namespaces/{namespace}/serviceaccounts/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/namespaces/{namespace}/serviceaccounts/{name}","q":{"exist":["name","namespace_id","pretty"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"serviceaccounts"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v1/namespaces/{namespace}/serviceaccounts/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"namespace_id","or":"namespace","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"grace_period_second","or":"gracePeriodSeconds","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"ignore_store_read_error_with_cluster_breaking_potential","or":"ignoreStoreReadErrorWithClusterBreakingPotential","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"orphan_dependent","or":"orphanDependents","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"propagation_policy","or":"propagationPolicy","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"DELETE","o":"/api/v1/namespaces/{namespace}/serviceaccounts/{name}","q":{"exist":["dry_run","grace_period_second","ignore_store_read_error_with_cluster_breaking_potential","name","namespace_id","orphan_dependent","pretty","propagation_policy"]},"r":{"param":{"namespace":"namespace_id"}},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"namespaces"},{"var":"namespace_id"},{"lit":"serviceaccounts"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.namespace","$.main.kit.entity.serviceaccount"]]},"key$":"service_account","name__orig":"service_account","Name":"ServiceAccount","name_":"service_account","name-":"service-account","NAME":"SERVICE_ACCOUNT","index$":32}, {"active":true,"entity":"service_account","key$":"BasicServiceAccountFlow","kind":"basic","name":"BasicServiceAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"service_account_ref01","srcdatavar":"service_account_ref01_data","suffix":"_dt0"},"m":{"id":"service_account01","namespace_id":"namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-service_account_ref01"}}]}]}, 'ServiceAccount', {"GET /api/v1/namespaces/{namespace}/serviceaccounts/{name}":{"protocol":"http","parameters":[{"description":"name of the ServiceAccount","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":2}]},"DELETE /api/v1/namespaces/{namespace}/serviceaccounts/{name}":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"DeleteOptions may be provided when deleting an API object.","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","type":"string"},"dryRun":{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","items":{"type":"string"},"type":"array","x-kubernetes-list-type":"atomic"},"gracePeriodSeconds":{"description":"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.","format":"int64","type":"integer"},"ignoreStoreReadErrorWithClusterBreakingPotential":{"description":"if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it","type":"boolean"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","type":"string"},"orphanDependents":{"description":"Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.","type":"boolean"},"preconditions":{"allOf":[{"description":"Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.","properties":{"resourceVersion":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions"}],"description":"Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned."},"propagationPolicy":{"description":"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.","type":"string"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"","kind":"DeleteOptions","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"}}}},"parameters":[{"description":"name of the ServiceAccount","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"object name and auth scope, such as for teams and projects","in":"path","name":"namespace","required":true,"schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.","in":"query","name":"gracePeriodSeconds","schema":{"type":"integer","uniqueItems":true},"index$":4},{"description":"if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it","in":"query","name":"ignoreStoreReadErrorWithClusterBreakingPotential","schema":{"type":"boolean","uniqueItems":true},"index$":5},{"description":"Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.","in":"query","name":"orphanDependents","schema":{"type":"boolean","uniqueItems":true},"index$":6},{"description":"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.","in":"query","name":"propagationPolicy","schema":{"type":"string","uniqueItems":true},"index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let service_account_ref01_data = Object.values(setup.data.existing.service_account)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const service_account_ref01_ent = client.ServiceAccount()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/service_account/ServiceAccountTestData.json')

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
    ['service_account01','service_account02','service_account03','namespace01','namespace02','namespace03','serviceaccount01','serviceaccount02','serviceaccount03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_SERVICE_ACCOUNT_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_SERVICE_ACCOUNT_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_SERVICE_ACCOUNT_ENTID']
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
  
