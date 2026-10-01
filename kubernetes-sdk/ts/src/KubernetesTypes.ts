// Typed models for the Kubernetes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ApiResourceList {
  categories?: any[]
  group?: string
  kind: string
  name: string
  namespaced: boolean
  shortNames?: any[]
  singularName: string
  storageVersionHash?: string
  verbs: any[]
  version?: string
}

export interface ApiResourceListListMatch {
  categories?: any[]
  group?: string
  kind?: string
  name?: string
  namespaced?: boolean
  shortNames?: any[]
  singularName?: string
  storageVersionHash?: string
  verbs?: any[]
  version?: string
}

export interface Binding {
  apiVersion?: string
  kind?: string
  metadata?: any
  target: any
}

export interface BindingCreateData {
  name?: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  target: any
}

export interface ComponentStatus {
  apiVersion?: string
  conditions?: any[]
  kind?: string
  metadata?: any
}

export interface ComponentStatusLoadMatch {
  name: string
  pretty?: string
}

export interface ComponentStatusListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface ConfigMap {
  apiVersion?: string
  binaryData?: Record<string, any>
  data?: Record<string, any>
  immutable?: boolean
  kind?: string
  metadata?: any
}

export interface ConfigMapLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface ConfigMapCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  binaryData?: Record<string, any>
  data?: Record<string, any>
  immutable?: boolean
  kind?: string
  metadata?: any
}

export interface ConfigMapUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  binaryData?: Record<string, any>
  data?: Record<string, any>
  immutable?: boolean
  kind?: string
  metadata?: any
}

export interface ConfigMapList {
  apiVersion?: string
  binaryData?: Record<string, any>
  data?: Record<string, any>
  immutable?: boolean
  kind?: string
  metadata?: any
}

export interface ConfigMapListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Configmap {
  id?: string
  object: any
  type: string
}

export interface ConfigmapLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface CoreV1 {
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: any[]
  kind?: string
  metadata?: any
  secrets?: any[]
  spec?: any
  status?: any
  template?: any
}

export interface CoreV1LoadMatch {
  node_id: string
  path?: string
}

export interface CoreV1ListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface CoreV1CreateData {
  node_id: string
  path?: string
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: any[]
  kind?: string
  metadata?: any
  secrets?: any[]
  spec?: any
  status?: any
  template?: any
}

export interface CoreV1UpdateData {
  name: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: any[]
  kind?: string
  metadata?: any
  secrets?: any[]
  spec?: any
  status?: any
  template?: any
}

export interface CoreV1RemoveMatch {
  node_id: string
  path?: string
}

export interface Endpoint {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  subsets?: any[]
  type: string
}

export interface EndpointLoadMatch {
  id: string
  namespace_id: string
  pretty?: string
}

export interface EndpointListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface EndpointCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  subsets?: any[]
  type: string
}

export interface EndpointUpdateData {
  id: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  object?: any
  subsets?: any[]
  type?: string
}

export interface Event {
  action?: string
  apiVersion?: string
  count?: number
  eventTime?: any
  firstTimestamp?: any
  id?: string
  involvedObject: any
  kind?: string
  lastTimestamp?: any
  message?: string
  metadata: any
  object: any
  reason?: string
  related?: any
  reportingComponent?: string
  reportingInstance?: string
  series?: any
  source?: any
  type: string
}

export interface EventLoadMatch {
  id: string
  namespace_id: string
  pretty?: string
}

export interface EventListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface EventCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  action?: string
  apiVersion?: string
  count?: number
  eventTime?: any
  firstTimestamp?: any
  id?: string
  involvedObject: any
  kind?: string
  lastTimestamp?: any
  message?: string
  metadata: any
  object: any
  reason?: string
  related?: any
  reportingComponent?: string
  reportingInstance?: string
  series?: any
  source?: any
  type: string
}

export interface EventUpdateData {
  id: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  action?: string
  apiVersion?: string
  count?: number
  eventTime?: any
  firstTimestamp?: any
  involvedObject?: any
  kind?: string
  lastTimestamp?: any
  message?: string
  metadata?: any
  object?: any
  reason?: string
  related?: any
  reportingComponent?: string
  reportingInstance?: string
  series?: any
  source?: any
  type?: string
}

export interface Eviction {
  apiVersion?: string
  deleteOptions?: any
  kind?: string
  metadata?: any
}

export interface EvictionCreateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  deleteOptions?: any
  kind?: string
  metadata?: any
}

export interface LimitRange {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
}

export interface LimitRangeLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface LimitRangeCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
}

export interface LimitRangeUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
}

export interface LimitRangeList {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
}

export interface LimitRangeListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Limitrange {
  id?: string
  object: any
  type: string
}

export interface LimitrangeLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Namespace {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface NamespaceLoadMatch {
  id: string
  pretty?: string

  // Selects a custom action instead of the plain load:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NamespaceListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface NamespaceCreateData {
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface NamespaceUpdateData {
  id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  object?: any
  spec?: any
  status?: any
  type?: string

  // Selects a custom action instead of the plain update:
  //   'finalize' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Node {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface NodeLoadMatch {
  id: string
  pretty?: string

  // Selects a custom action instead of the plain load:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NodeListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface NodeCreateData {
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface NodeUpdateData {
  id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  object?: any
  spec?: any
  status?: any
  type?: string

  // Selects a custom action instead of the plain update:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NodeRemoveMatch {
  continue?: string
  dry_run?: string
  field_selector?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  label_selector?: string
  limit?: number
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
}

export interface PersistentVolume {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface PersistentVolumeLoadMatch {
  name: string
  pretty?: string
}

export interface PersistentVolumeUpdateData {
  name: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  force?: boolean
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any

  // Selects a custom action instead of the plain update:
  //   'status' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PersistentVolumeRemoveMatch {
  name: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface PersistentVolumeClaim {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface PersistentVolumeClaimLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface PersistentVolumeClaimUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  force?: boolean
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any

  // Selects a custom action instead of the plain update:
  //   'status' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PersistentVolumeClaimRemoveMatch {
  name: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface PersistentVolumeClaimList {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface PersistentVolumeClaimListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Persistentvolume {
  id?: string
  object: any
  type: string
}

export interface PersistentvolumeLoadMatch {
  id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Persistentvolumeclaim {
  id?: string
  object: any
  type: string
}

export interface PersistentvolumeclaimLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Pod {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface PodLoadMatch {
  id: string
  namespace_id: string
  pretty?: string

  // Selects a custom action instead of the plain load:
  //   'ephemeralcontainer' | 'resize' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PodListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface PodCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string

  // Selects a custom action instead of the plain create:
  //   'attach' | 'exec' | 'portforward'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PodUpdateData {
  id: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  object?: any
  spec?: any
  status?: any
  type?: string

  // Selects a custom action instead of the plain update:
  //   'ephemeralcontainer' | 'resize' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PodRemoveMatch {
  id: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface PodTemplate {
  apiVersion?: string
  kind?: string
  metadata?: any
  template?: any
}

export interface PodTemplateLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface PodTemplateRemoveMatch {
  name: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface PodTemplateList {
  apiVersion?: string
  kind?: string
  metadata?: any
  template?: any
}

export interface PodTemplateListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Podtemplate {
  id?: string
  object: any
  type: string
}

export interface PodtemplateLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface ReplicationControllerList {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface ReplicationControllerListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Replicationcontroller {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface ReplicationcontrollerLoadMatch {
  id: string
  namespace_id: string
  pretty?: string
}

export interface ReplicationcontrollerUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  force?: boolean
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object?: any
  spec?: any
  status?: any
  type?: string

  // Selects a custom action instead of the plain update:
  //   'status' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ResourceQuota {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface ResourceQuotaLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface ResourceQuotaUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  force?: boolean
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any

  // Selects a custom action instead of the plain update:
  //   'status' | 'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ResourceQuotaRemoveMatch {
  name: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface ResourceQuotaList {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface ResourceQuotaListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Resourcequota {
  id?: string
  object: any
  type: string
}

export interface ResourcequotaLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Scale {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface ScaleLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface ScaleUpdateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface Secret {
  apiVersion?: string
  data?: Record<string, any>
  id?: string
  immutable?: boolean
  kind?: string
  metadata?: any
  object: any
  stringData?: Record<string, any>
  type: string
}

export interface SecretLoadMatch {
  id: string
  namespace_id: string
  pretty?: string
}

export interface SecretListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface SecretCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  data?: Record<string, any>
  id?: string
  immutable?: boolean
  kind?: string
  metadata?: any
  object: any
  stringData?: Record<string, any>
  type: string
}

export interface SecretUpdateData {
  id: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  data?: Record<string, any>
  immutable?: boolean
  kind?: string
  metadata?: any
  object?: any
  stringData?: Record<string, any>
  type?: string
}

export interface Service {
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface ServiceLoadMatch {
  id: string
  namespace_id: string
  pretty?: string

  // Selects a custom action instead of the plain load:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ServiceListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface ServiceCreateData {
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  id?: string
  kind?: string
  metadata?: any
  object: any
  spec?: any
  status?: any
  type: string
}

export interface ServiceUpdateData {
  id: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  object?: any
  spec?: any
  status?: any
  type?: string

  // Selects a custom action instead of the plain update:
  //   'status'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ServiceRemoveMatch {
  id: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface ServiceAccount {
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: any[]
  kind?: string
  metadata?: any
  secrets?: any[]
}

export interface ServiceAccountLoadMatch {
  name: string
  namespace_id: string
  pretty?: string
}

export interface ServiceAccountRemoveMatch {
  name: string
  namespace_id: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface ServiceAccountList {
  apiVersion?: string
  automountServiceAccountToken?: boolean
  imagePullSecrets?: any[]
  kind?: string
  metadata?: any
  secrets?: any[]
}

export interface ServiceAccountListListMatch {
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Serviceaccount {
  id?: string
  object: any
  type: string
}

export interface ServiceaccountLoadMatch {
  id: string
  namespace_id: string
  allow_watch_bookmark?: boolean
  continue?: string
  field_selector?: string
  label_selector?: string
  limit?: number
  pretty?: string
  resource_version?: string
  resource_version_match?: string
  send_initial_event?: boolean
  shard_selector?: string
  timeout_second?: number
  watch?: boolean
}

export interface Status {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface StatusLoadMatch {
  name: string
  namespace_id?: string
  pretty?: string
}

export interface StatusRemoveMatch {
  name: string
  dry_run?: string
  grace_period_second?: number
  ignore_store_read_error_with_cluster_breaking_potential?: boolean
  orphan_dependent?: boolean
  pretty?: string
  propagation_policy?: string
}

export interface Token {
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

export interface TokenCreateData {
  name: string
  namespace_id: string
  dry_run?: string
  field_manager?: string
  field_validation?: string
  pretty?: string
  apiVersion?: string
  kind?: string
  metadata?: any
  spec?: any
  status?: any
}

