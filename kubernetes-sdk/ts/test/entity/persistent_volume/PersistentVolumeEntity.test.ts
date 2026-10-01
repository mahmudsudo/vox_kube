

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


describe('PersistentVolumeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KUBERNETES_TEST_LIVE=TRUE.
  afterEach(liveDelay('KUBERNETES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KubernetesSDK.test()
    const ent = testsdk.PersistentVolume()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KUBERNETES_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'persistent_volume.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apiVersion":{"a":true,"h":"Api Version","n":"apiVersion","r":false,"sh":"APIVersion defines the versioned schema of this representation of an object.","t":"`$STRING`","key$":"apiVersion","index$":0},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"sh":"Kind is a string value representing the REST resource this object represents.","t":"`$STRING`","key$":"kind","index$":1},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"metadata is the standard object metadata.","t":"`$ANY`","key$":"metadata","index$":2},"spec":{"a":true,"h":"Spec","n":"spec","r":false,"sh":"spec defines a specification of a persistent volume owned by the cluster.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":5},"key$":"spec","index$":3},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"status represents the current information/status for the persistent volume.","t":"`$ANY`","key$":"status","index$":4}},"name":"persistent_volume","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/persistentvolumes/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v1/persistentvolumes/{name}","q":{"exist":["name","pretty"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"persistentvolumes"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v1/persistentvolumes/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"grace_period_second","or":"gracePeriodSeconds","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"ignore_store_read_error_with_cluster_breaking_potential","or":"ignoreStoreReadErrorWithClusterBreakingPotential","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"k":"query","n":"orphan_dependent","or":"orphanDependents","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"propagation_policy","or":"propagationPolicy","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"DELETE","o":"/api/v1/persistentvolumes/{name}","q":{"exist":["dry_run","grace_period_second","ignore_store_read_error_with_cluster_breaking_potential","name","orphan_dependent","pretty","propagation_policy"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"persistentvolumes"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v1/persistentvolumes/{name}/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"force","or":"force","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"PATCH","o":"/api/v1/persistentvolumes/{name}/status","q":{"$action":"status","exist":["dry_run","field_manager","field_validation","force","name","pretty"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"persistentvolumes"},{"var":"name"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v1/persistentvolumes/{name}/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"dry_run","or":"dryRun","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field_manager","or":"fieldManager","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"field_validation","or":"fieldValidation","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/api/v1/persistentvolumes/{name}/status","q":{"$action":"status","exist":["dry_run","field_manager","field_validation","name","pretty"]},"r":{},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"persistentvolumes"},{"var":"name"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.persistentvolume"]]},"key$":"persistent_volume","name__orig":"persistent_volume","Name":"PersistentVolume","name_":"persistent_volume","name-":"persistent-volume","NAME":"PERSISTENT_VOLUME","index$":15}, {"active":true,"entity":"persistent_volume","key$":"BasicPersistentVolumeFlow","kind":"basic","name":"BasicPersistentVolumeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"persistent_volume_ref01","srcdatavar":"persistent_volume_ref01_data","suffix":"_up0","textfield":"apiVersion"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-persistent_volume_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"persistent_volume_ref01","srcdatavar":"persistent_volume_ref01_data","suffix":"_dt0"},"m":{"id":"persistent_volume01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-persistent_volume_ref01"}}]}]}, 'PersistentVolume', {"GET /api/v1/persistentvolumes/{name}":{"protocol":"http","parameters":[{"description":"name of the PersistentVolume","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1}]},"DELETE /api/v1/persistentvolumes/{name}":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"DeleteOptions may be provided when deleting an API object.","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","type":"string"},"dryRun":{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","items":{"type":"string"},"type":"array","x-kubernetes-list-type":"atomic"},"gracePeriodSeconds":{"description":"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.","format":"int64","type":"integer"},"ignoreStoreReadErrorWithClusterBreakingPotential":{"description":"if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it","type":"boolean"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","type":"string"},"orphanDependents":{"description":"Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.","type":"boolean"},"preconditions":{"allOf":[{"description":"Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.","properties":{"resourceVersion":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions"}],"description":"Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned."},"propagationPolicy":{"description":"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.","type":"string"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"","kind":"DeleteOptions","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions"}}}},"parameters":[{"description":"name of the PersistentVolume","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.","in":"query","name":"gracePeriodSeconds","schema":{"type":"integer","uniqueItems":true},"index$":3},{"description":"if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it","in":"query","name":"ignoreStoreReadErrorWithClusterBreakingPotential","schema":{"type":"boolean","uniqueItems":true},"index$":4},{"description":"Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.","in":"query","name":"orphanDependents","schema":{"type":"boolean","uniqueItems":true},"index$":5},{"description":"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.","in":"query","name":"propagationPolicy","schema":{"type":"string","uniqueItems":true},"index$":6}]},"PATCH /api/v1/persistentvolumes/{name}/status":{"protocol":"http","requestBody":{"content":{"application/apply-patch+cbor":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/apply-patch+yaml":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/json-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/merge-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}},"application/strategic-merge-patch+json":{"schema":{"description":"Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.","type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.Patch"}}},"required":true},"parameters":[{"description":"name of the PersistentVolume","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":4},{"description":"Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.","in":"query","name":"force","schema":{"type":"boolean","uniqueItems":true},"index$":5}]},"PUT /api/v1/persistentvolumes/{name}/status":{"protocol":"http","requestBody":{"content":{"*/*":{"schema":{"description":"PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes","properties":{"apiVersion":{"description":"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources","key$":"apiVersion","type":"string"},"kind":{"description":"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds","key$":"kind","type":"string"},"metadata":{"allOf":[{"description":"ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.","properties":{"annotations":{},"creationTimestamp":{},"deletionGracePeriodSeconds":{},"deletionTimestamp":{},"finalizers":{},"generateName":{},"generation":{},"labels":{},"managedFields":{},"name":{},"namespace":{},"ownerReferences":{},"resourceVersion":{},"selfLink":{},"uid":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta"}],"default":{},"description":"metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata","key$":"metadata"},"spec":{"allOf":[{"description":"PersistentVolumeSpec is the specification of a persistent volume.","properties":{"accessModes":{},"awsElasticBlockStore":{},"azureDisk":{},"azureFile":{},"capacity":{},"cephfs":{},"cinder":{},"claimRef":{},"csi":{},"fc":{},"flexVolume":{},"flocker":{},"gcePersistentDisk":{},"glusterfs":{},"hostPath":{},"iscsi":{},"local":{},"mountOptions":{},"nfs":{},"nodeAffinity":{},"persistentVolumeReclaimPolicy":{},"photonPersistentDisk":{},"portworxVolume":{},"quobyte":{},"rbd":{},"scaleIO":{},"storageClassName":{},"storageos":{},"volumeAttributesClassName":{},"volumeMode":{},"vsphereVolume":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.api.core.v1.PersistentVolumeSpec"}],"default":{},"description":"spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes","key$":"spec"},"status":{"allOf":[{"description":"PersistentVolumeStatus is the current status of a persistent volume.","properties":{"lastPhaseTransitionTime":{},"message":{},"phase":{},"reason":{}},"type":"object","x-ref":"#/components/schemas/io.k8s.api.core.v1.PersistentVolumeStatus"}],"default":{},"description":"status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes","key$":"status"}},"type":"object","x-kubernetes-group-version-kind":[{"group":"","kind":"PersistentVolume","version":"v1"}],"x-ref":"#/components/schemas/io.k8s.api.core.v1.PersistentVolume"}}},"required":true},"parameters":[{"description":"name of the PersistentVolume","in":"path","name":"name","required":true,"schema":{"type":"string","uniqueItems":true},"index$":0},{"description":"If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).","in":"query","name":"pretty","schema":{"type":"string","uniqueItems":true},"index$":1},{"description":"When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed","in":"query","name":"dryRun","schema":{"type":"string","uniqueItems":true},"index$":2},{"description":"fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.","in":"query","name":"fieldManager","schema":{"type":"string","uniqueItems":true},"index$":3},{"description":"fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.","in":"query","name":"fieldValidation","schema":{"type":"string","uniqueItems":true},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let persistent_volume_ref01_data = Object.values(setup.data.existing.persistent_volume)[0] as any

    // UPDATE
    const persistent_volume_ref01_ent = client.PersistentVolume()
    const persistent_volume_ref01_data_up0: any = {}

    const persistent_volume_ref01_markdef_up0 = { name: 'apiVersion', value: 'Mark01-persistent_volume_ref01_' + setup.now }
    ;(persistent_volume_ref01_data_up0 as any)[persistent_volume_ref01_markdef_up0.name] = persistent_volume_ref01_markdef_up0.value

    const persistent_volume_ref01_resdata_up0 = (await persistent_volume_ref01_ent.update(persistent_volume_ref01_data_up0)).data()
    assert(null != persistent_volume_ref01_resdata_up0)

    assert((persistent_volume_ref01_resdata_up0 as any)[persistent_volume_ref01_markdef_up0.name] === persistent_volume_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/persistent_volume/PersistentVolumeTestData.json')

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
    ['persistent_volume01','persistent_volume02','persistent_volume03','persistentvolume01','persistentvolume02','persistentvolume03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KUBERNETES_TEST_PERSISTENT_VOLUME_ENTID': idmap,
    'KUBERNETES_TEST_LIVE': 'FALSE',
    'KUBERNETES_TEST_EXPLAIN': 'FALSE',
    'KUBERNETES_APIKEY': '',
    'KUBERNETES_SERVER_BASE': "",
  })

  idmap = env['KUBERNETES_TEST_PERSISTENT_VOLUME_ENTID']

  const live = 'TRUE' === env.KUBERNETES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KUBERNETES_TEST_PERSISTENT_VOLUME_ENTID']
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
  
