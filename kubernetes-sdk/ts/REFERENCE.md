# Kubernetes TypeScript SDK Reference

Complete API reference for the Kubernetes TypeScript SDK.


## KubernetesSDK

### Constructor

```ts
new KubernetesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KubernetesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = KubernetesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `KubernetesSDK` instance in test mode.


### Instance Methods

#### `ApiResourceList(data?: object)`

Create a new `ApiResourceList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiResourceListEntity` instance.

#### `Binding(data?: object)`

Create a new `Binding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BindingEntity` instance.

#### `ComponentStatus(data?: object)`

Create a new `ComponentStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComponentStatusEntity` instance.

#### `ConfigMap(data?: object)`

Create a new `ConfigMap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigMapEntity` instance.

#### `ConfigMapList(data?: object)`

Create a new `ConfigMapList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigMapListEntity` instance.

#### `Configmap(data?: object)`

Create a new `Configmap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigmapEntity` instance.

#### `CoreV1(data?: object)`

Create a new `CoreV1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoreV1Entity` instance.

#### `Endpoint(data?: object)`

Create a new `Endpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `Eviction(data?: object)`

Create a new `Eviction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EvictionEntity` instance.

#### `LimitRange(data?: object)`

Create a new `LimitRange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LimitRangeEntity` instance.

#### `LimitRangeList(data?: object)`

Create a new `LimitRangeList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LimitRangeListEntity` instance.

#### `Limitrange(data?: object)`

Create a new `Limitrange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LimitrangeEntity` instance.

#### `Namespace(data?: object)`

Create a new `Namespace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NamespaceEntity` instance.

#### `Node(data?: object)`

Create a new `Node` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NodeEntity` instance.

#### `PersistentVolume(data?: object)`

Create a new `PersistentVolume` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersistentVolumeEntity` instance.

#### `PersistentVolumeClaim(data?: object)`

Create a new `PersistentVolumeClaim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersistentVolumeClaimEntity` instance.

#### `PersistentVolumeClaimList(data?: object)`

Create a new `PersistentVolumeClaimList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersistentVolumeClaimListEntity` instance.

#### `Persistentvolume(data?: object)`

Create a new `Persistentvolume` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersistentvolumeEntity` instance.

#### `Persistentvolumeclaim(data?: object)`

Create a new `Persistentvolumeclaim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PersistentvolumeclaimEntity` instance.

#### `Pod(data?: object)`

Create a new `Pod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PodEntity` instance.

#### `PodTemplate(data?: object)`

Create a new `PodTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PodTemplateEntity` instance.

#### `PodTemplateList(data?: object)`

Create a new `PodTemplateList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PodTemplateListEntity` instance.

#### `Podtemplate(data?: object)`

Create a new `Podtemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PodtemplateEntity` instance.

#### `ReplicationControllerList(data?: object)`

Create a new `ReplicationControllerList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReplicationControllerListEntity` instance.

#### `Replicationcontroller(data?: object)`

Create a new `Replicationcontroller` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReplicationcontrollerEntity` instance.

#### `ResourceQuota(data?: object)`

Create a new `ResourceQuota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceQuotaEntity` instance.

#### `ResourceQuotaList(data?: object)`

Create a new `ResourceQuotaList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceQuotaListEntity` instance.

#### `Resourcequota(data?: object)`

Create a new `Resourcequota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourcequotaEntity` instance.

#### `Scale(data?: object)`

Create a new `Scale` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScaleEntity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Service(data?: object)`

Create a new `Service` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ServiceEntity` instance.

#### `ServiceAccount(data?: object)`

Create a new `ServiceAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ServiceAccountEntity` instance.

#### `ServiceAccountList(data?: object)`

Create a new `ServiceAccountList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ServiceAccountListEntity` instance.

#### `Serviceaccount(data?: object)`

Create a new `Serviceaccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ServiceaccountEntity` instance.

#### `Status(data?: object)`

Create a new `Status` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `KubernetesSDK.test()`.

**Returns:** `KubernetesSDK` instance in test mode.


---

## ApiResourceListEntity

```ts
const api_resource_list = client.ApiResourceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | No | categories is a list of the grouped resources this resource belongs to (e.g. |
| `group` | `string` | No | group is the preferred group of the resource. |
| `kind` | `string` | Yes | kind is the kind for the resource (e.g. |
| `name` | `string` | Yes | name is the plural name of the resource. |
| `namespaced` | `boolean` | Yes | namespaced indicates if a resource is namespaced or not. |
| `shortNames` | `any[]` | No | shortNames is a list of suggested short names of the resource. |
| `singularName` | `string` | Yes | singularName is the singular name of the resource. |
| `storageVersionHash` | `string` | No | The hash value of the storage version, the version this resource is converted to when written to the data store. |
| `verbs` | `any[]` | Yes | verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) |
| `version` | `string` | No | version is the preferred version of the resource. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiResourceList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiResourceListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BindingEntity

```ts
const binding = client.Binding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `target` | `any` | Yes | target is the target object that you want to bind to the standard object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Binding().create({
  namespace_id: 'example_namespace_id',
  target: 'example_target',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BindingEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComponentStatusEntity

```ts
const component_status = client.ComponentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `conditions` | `any[]` | No | List of component conditions observed |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | Standard object's metadata. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ComponentStatus().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ComponentStatus().load({ name: 'name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComponentStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigMapEntity

```ts
const config_map = client.ConfigMap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | `Record<string, any>` | No | binaryData contains the binary data. |
| `data` | `Record<string, any>` | No | data contains the configuration data. |
| `immutable` | `boolean` | No | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ConfigMap().create({
  namespace_id: 'example_namespace_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ConfigMap().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ConfigMap().update({
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigMapEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigMapListEntity

```ts
const config_map_list = client.ConfigMapList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | `Record<string, any>` | No | binaryData contains the binary data. |
| `data` | `Record<string, any>` | No | data contains the configuration data. |
| `immutable` | `boolean` | No | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ConfigMapList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigMapListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigmapEntity

```ts
const configmap = client.Configmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Configmap().load({ id: 'configmap_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigmapEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CoreV1Entity

```ts
const core_v1 = client.CoreV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | No | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | No | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata. |
| `secrets` | `any[]` | No | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |
| `spec` | `any` | No | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | No | status represents the current information/status of a persistent volume claim. |
| `template` | `any` | No | template defines the pods that will be created from this pod template. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CoreV1().create({
  node_id: 'example_node_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CoreV1().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CoreV1().load({ node_id: 'node_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CoreV1().remove({ node_id: 'node_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CoreV1().update({
  name: 'name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoreV1Entity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointEntity

```ts
const endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | Standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `subsets` | `any[]` | No | The set of all endpoints is the union of all subsets. |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Endpoint().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Endpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Endpoint().load({ id: 'endpoint_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Endpoint().update({
  id: 'endpoint_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No | action is what action was taken/failed regarding to the Regarding object. |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `count` | `number` | No | count is the number of times this event has occurred. |
| `eventTime` | `any` | No | eventTime is the time when this Event was first observed. |
| `firstTimestamp` | `any` | No | firstTimestamp is the time at which the event was first recorded. |
| `id` | `string` | No |  |
| `involvedObject` | `any` | Yes | involvedObject is the object that this event is about. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `lastTimestamp` | `any` | No | lastTimestamp is the time at which the most recent occurrence of this event was recorded. |
| `message` | `string` | No | message is a human-readable description of the status of this operation. |
| `metadata` | `any` | Yes | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `reason` | `string` | No | reason is a short, machine understandable string that gives the reason for the transition into the object's current status. |
| `related` | `any` | No | related is an optional secondary object for more complex actions. |
| `reportingComponent` | `string` | No | reportingComponent is the name of the controller that emitted this Event, e.g. |
| `reportingInstance` | `string` | No | reportingInstance is the ID of the controller instance, e.g. |
| `series` | `any` | No | series is data about the Event series this event represents or nil if it's a singleton Event. |
| `source` | `any` | No | source is the component reporting this event. |
| `type` | `string` | Yes | type is the type of this event (Normal, Warning), new types could be added in the future |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `action` | - | - | - | - |
| `apiVersion` | - | - | - | - |
| `count` | - | - | - | - |
| `eventTime` | - | - | - | - |
| `firstTimestamp` | - | - | - | - |
| `id` | - | - | - | - |
| `involvedObject` | - | - | - | - |
| `kind` | - | - | - | - |
| `lastTimestamp` | - | - | - | - |
| `message` | - | - | - | - |
| `metadata` | - | - | - | - |
| `object` | - | - | - | - |
| `reason` | - | - | - | - |
| `related` | - | - | - | - |
| `reportingComponent` | - | - | - | - |
| `reportingInstance` | - | - | - | - |
| `series` | - | - | - | - |
| `source` | - | - | - | - |
| `type` | Yes | Yes | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Event().create({
  namespace_id: 'example_namespace_id',
  involvedObject: 'example_involvedObject',
  metadata: 'example_metadata',
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load({ id: 'event_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Event().update({
  id: 'event_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EvictionEntity

```ts
const eviction = client.Eviction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `deleteOptions` | `any` | No | deleteOptions may be provided |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata describes the pod that is being evicted. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Eviction().create({
  name: 'example_name',
  namespace_id: 'example_namespace_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EvictionEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LimitRangeEntity

```ts
const limit_range = client.LimitRange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec defines the limits enforced. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LimitRange().create({
  namespace_id: 'example_namespace_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LimitRange().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.LimitRange().update({
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LimitRangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LimitRangeListEntity

```ts
const limit_range_list = client.LimitRangeList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec defines the limits enforced. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.LimitRangeList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LimitRangeListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LimitrangeEntity

```ts
const limitrange = client.Limitrange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Limitrange().load({ id: 'limitrange_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LimitrangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NamespaceEntity

```ts
const namespace = client.Namespace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | No | spec defines the behavior of the Namespace. |
| `status` | `any` | No | status describes the current status of a Namespace. |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/namespaces/{name}/status` | `client.Namespace().load({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{name}/status` | `client.Namespace().patch({ $action: 'status', ... })` |
| `finalize` | `/api/v1/namespaces/{name}/finalize` | `client.Namespace().update({ $action: 'finalize', ... })` |
| `status` | `/api/v1/namespaces/{name}/status` | `client.Namespace().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Namespace record — check the API definition for its shape.

```ts
const result = await client.Namespace().load({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Namespace().create({
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Namespace().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Namespace().load({ id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Namespace().update({
  id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NodeEntity

```ts
const node = client.Node()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | No | spec defines the behavior of a node. |
| `status` | `any` | No | status is the most recently observed status of the node. |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/nodes/{name}/status` | `client.Node().load({ $action: 'status', ... })` |
| `status` | `/api/v1/nodes/{name}/status` | `client.Node().patch({ $action: 'status', ... })` |
| `status` | `/api/v1/nodes/{name}/status` | `client.Node().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Node record — check the API definition for its shape.

```ts
const result = await client.Node().load({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Node().create({
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Node().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Node().load({ id: 'node_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Node().remove()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Node().update({
  id: 'node_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersistentVolumeEntity

```ts
const persistent_volume = client.PersistentVolume()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata. |
| `spec` | `any` | No | spec defines a specification of a persistent volume owned by the cluster. |
| `status` | `any` | No | status represents the current information/status for the persistent volume. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/persistentvolumes/{name}/status` | `client.PersistentVolume().update({ $action: 'status', ... })` |
| `status` | `/api/v1/persistentvolumes/{name}/status` | `client.PersistentVolume().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
PersistentVolume record — check the API definition for its shape.

```ts
const result = await client.PersistentVolume().update({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PersistentVolume().load({ name: 'name' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PersistentVolume().remove({ name: 'name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PersistentVolume().update({
  name: 'name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersistentVolumeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersistentVolumeClaimEntity

```ts
const persistent_volume_claim = client.PersistentVolumeClaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata. |
| `spec` | `any` | No | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | No | status represents the current information/status of a persistent volume claim. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status` | `client.PersistentVolumeClaim().update({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status` | `client.PersistentVolumeClaim().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
PersistentVolumeClaim record — check the API definition for its shape.

```ts
const result = await client.PersistentVolumeClaim().update({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PersistentVolumeClaim().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PersistentVolumeClaim().remove({ name: 'name', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PersistentVolumeClaim().update({
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersistentVolumeClaimEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersistentVolumeClaimListEntity

```ts
const persistent_volume_claim_list = client.PersistentVolumeClaimList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata. |
| `spec` | `any` | No | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | No | status represents the current information/status of a persistent volume claim. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PersistentVolumeClaimList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersistentVolumeClaimListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersistentvolumeEntity

```ts
const persistentvolume = client.Persistentvolume()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Persistentvolume().load({ id: 'persistentvolume_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersistentvolumeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PersistentvolumeclaimEntity

```ts
const persistentvolumeclaim = client.Persistentvolumeclaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Persistentvolumeclaim().load({ id: 'persistentvolumeclaim_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PersistentvolumeclaimEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PodEntity

```ts
const pod = client.Pod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | No | spec is the specification of the desired behavior of the pod. |
| `status` | `any` | No | status is the most recently observed status of the pod. |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `attach` | `/api/v1/namespaces/{namespace}/pods/{name}/attach` | `client.Pod().create({ $action: 'attach', ... })` |
| `exec` | `/api/v1/namespaces/{namespace}/pods/{name}/exec` | `client.Pod().create({ $action: 'exec', ... })` |
| `portforward` | `/api/v1/namespaces/{namespace}/pods/{name}/portforward` | `client.Pod().create({ $action: 'portforward', ... })` |
| `ephemeralcontainer` | `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | `client.Pod().load({ $action: 'ephemeralcontainer', ... })` |
| `resize` | `/api/v1/namespaces/{namespace}/pods/{name}/resize` | `client.Pod().load({ $action: 'resize', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/pods/{name}/status` | `client.Pod().load({ $action: 'status', ... })` |
| `ephemeralcontainer` | `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | `client.Pod().patch({ $action: 'ephemeralcontainer', ... })` |
| `resize` | `/api/v1/namespaces/{namespace}/pods/{name}/resize` | `client.Pod().patch({ $action: 'resize', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/pods/{name}/status` | `client.Pod().patch({ $action: 'status', ... })` |
| `ephemeralcontainer` | `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | `client.Pod().update({ $action: 'ephemeralcontainer', ... })` |
| `resize` | `/api/v1/namespaces/{namespace}/pods/{name}/resize` | `client.Pod().update({ $action: 'resize', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/pods/{name}/status` | `client.Pod().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Pod record — check the API definition for its shape.

```ts
const result = await client.Pod().create({
  $action: 'attach',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Pod().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Pod().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Pod().load({ id: 'pod_id', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Pod().remove({ id: 'pod_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Pod().update({
  id: 'pod_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PodEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PodTemplateEntity

```ts
const pod_template = client.PodTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `template` | `any` | No | template defines the pods that will be created from this pod template. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PodTemplate().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PodTemplate().remove({ name: 'name', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PodTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PodTemplateListEntity

```ts
const pod_template_list = client.PodTemplateList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `template` | `any` | No | template defines the pods that will be created from this pod template. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PodTemplateList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PodTemplateListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PodtemplateEntity

```ts
const podtemplate = client.Podtemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Podtemplate().load({ id: 'podtemplate_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PodtemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReplicationControllerListEntity

```ts
const replication_controller_list = client.ReplicationControllerList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec defines the specification of the desired behavior of the replication controller. |
| `status` | `any` | No | status is the most recently observed status of the replication controller. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReplicationControllerList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReplicationControllerListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReplicationcontrollerEntity

```ts
const replicationcontroller = client.Replicationcontroller()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | No | spec defines the specification of the desired behavior of the replication controller. |
| `status` | `any` | No | status is the most recently observed status of the replication controller. |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status` | `client.Replicationcontroller().update({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status` | `client.Replicationcontroller().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Replicationcontroller record — check the API definition for its shape.

```ts
const result = await client.Replicationcontroller().update({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Replicationcontroller().load({ id: 'replicationcontroller_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Replicationcontroller().update({
  id: 'replicationcontroller_id',
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReplicationcontrollerEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceQuotaEntity

```ts
const resource_quota = client.ResourceQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec defines the desired quota. |
| `status` | `any` | No | status defines the actual enforced quota and its current usage. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/namespaces/{namespace}/resourcequotas/{name}/status` | `client.ResourceQuota().update({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/resourcequotas/{name}/status` | `client.ResourceQuota().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
ResourceQuota record — check the API definition for its shape.

```ts
const result = await client.ResourceQuota().update({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ResourceQuota().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ResourceQuota().remove({ name: 'name', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ResourceQuota().update({
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceQuotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceQuotaListEntity

```ts
const resource_quota_list = client.ResourceQuotaList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec defines the desired quota. |
| `status` | `any` | No | status defines the actual enforced quota and its current usage. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ResourceQuotaList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceQuotaListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourcequotaEntity

```ts
const resourcequota = client.Resourcequota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Resourcequota().load({ id: 'resourcequota_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourcequotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScaleEntity

```ts
const scale = client.Scale()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. |
| `spec` | `any` | No | spec defines the behavior of the scale. |
| `status` | `any` | No | status is the current status of the scale. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Scale().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Scale().update({
  name: 'name',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScaleEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `data` | `Record<string, any>` | No | data contains the secret data. |
| `id` | `string` | No |  |
| `immutable` | `boolean` | No | immutable if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `stringData` | `Record<string, any>` | No | stringData allows specifying non-binary secret data in string form. |
| `type` | `string` | Yes | type is used to facilitate programmatic handling of secret data. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `apiVersion` | - | - | - | - |
| `data` | - | - | - | - |
| `id` | - | - | - | - |
| `immutable` | - | - | - | - |
| `kind` | - | - | - | - |
| `metadata` | - | - | - | - |
| `object` | - | - | - | - |
| `stringData` | - | - | - | - |
| `type` | Yes | Yes | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secret().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Secret().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Secret().load({ id: 'secret_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Secret().update({
  id: 'secret_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ServiceEntity

```ts
const service = client.Service()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` | No |  |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | No | spec defines the behavior of a service. |
| `status` | `any` | No | status is the most recently observed status of the service. |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/api/v1/namespaces/{namespace}/services/{name}/status` | `client.Service().load({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/services/{name}/status` | `client.Service().patch({ $action: 'status', ... })` |
| `status` | `/api/v1/namespaces/{namespace}/services/{name}/status` | `client.Service().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Service record — check the API definition for its shape.

```ts
const result = await client.Service().load({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Service().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Service().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Service().load({ id: 'service_id', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Service().remove({ id: 'service_id', namespace_id: 'namespace_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Service().update({
  id: 'service_id',
  namespace_id: 'namespace_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ServiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ServiceAccountEntity

```ts
const service_account = client.ServiceAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | No | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | No | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `secrets` | `any[]` | No | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ServiceAccount().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ServiceAccount().remove({ name: 'name', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ServiceAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ServiceAccountListEntity

```ts
const service_account_list = client.ServiceAccountList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | No | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | No | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `secrets` | `any[]` | No | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ServiceAccountList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ServiceAccountListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ServiceaccountEntity

```ts
const serviceaccount = client.Serviceaccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `object` | `any` | Yes | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Serviceaccount().load({ id: 'serviceaccount_id', namespace_id: 'namespace_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ServiceaccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusEntity

```ts
const status = client.Status()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object metadata. |
| `spec` | `any` | No | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | No | status represents the current information/status of a persistent volume claim. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Status().load({ name: 'name' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Status().remove({ name: 'name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiVersion` | `string` | No | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | No | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | No | metadata is the standard object's metadata. |
| `spec` | `any` | No | spec holds information about the request being evaluated |
| `status` | `any` | No | status is filled in by the server and indicates whether the token can be authenticated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Token().create({
  name: 'example_name',
  namespace_id: 'example_namespace_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `KubernetesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new KubernetesSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

