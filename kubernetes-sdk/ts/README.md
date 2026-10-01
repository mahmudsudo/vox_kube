# Kubernetes TypeScript SDK



The TypeScript SDK for the Kubernetes API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ApiResourceList()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/kubernetes-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/kubernetes-sdk
npm install ./kubernetes-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { KubernetesSDK } from '@voxgig-sdk/kubernetes-sdk'

const client = new KubernetesSDK({
  apikey: process.env.KUBERNETES_APIKEY,
  // Required: this API's server URL is templated on these.
  server: {
    base: '<base>',
  },
})
```

### 2. List apiresourcelist records

`list()` resolves to an array of ApiResourceList ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const apiresourcelists = await client.ApiResourceList().list()

for (const apiresourcelist of apiresourcelists) {
  console.log(apiresourcelist)
}
```

### 3. Load a configmap

ConfigMap is nested under name, so provide the `name`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const configmap = await client.ConfigMap().load({
    name: 'example_name',
    namespace_id: 'example_namespace_id',
  })
  console.log(configmap)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const resourcequota = await client.ResourceQuota().load({ name: "example", namespace_id: "example" })
  console.log(resourcequota)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = KubernetesSDK.test()

const resourcequota = await client.ResourceQuota().load({ name: 'example_name', namespace_id: 'example_namespace_id' })
// resourcequota is the entity, populated with mock response data
// — call resourcequota.data() for the record itself
console.log(resourcequota)
```

You can also use the instance method:

```ts
const client = new KubernetesSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.ResourceQuota()

// First call runs the operation and stores its result
await entity.load({ name: 'example_name', namespace_id: 'example_namespace_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new KubernetesSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
KUBERNETES_TEST_LIVE=TRUE
KUBERNETES_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### KubernetesSDK

#### Constructor

```ts
new KubernetesSDK(options?: {
  apikey?: string
  server?: { base: string }
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `server` | `object` | **Required.** Values for the server-URL variables: `base`. The API base URL is a template over them. |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ApiResourceList(data?)` | `ApiResourceListEntity` | Create an ApiResourceList entity instance. |
| `Binding(data?)` | `BindingEntity` | Create a Binding entity instance. |
| `ComponentStatus(data?)` | `ComponentStatusEntity` | Create a ComponentStatus entity instance. |
| `ConfigMap(data?)` | `ConfigMapEntity` | Create a ConfigMap entity instance. |
| `ConfigMapList(data?)` | `ConfigMapListEntity` | Create a ConfigMapList entity instance. |
| `Configmap(data?)` | `ConfigmapEntity` | Create a Configmap entity instance. |
| `CoreV1(data?)` | `CoreV1Entity` | Create a CoreV1 entity instance. |
| `Endpoint(data?)` | `EndpointEntity` | Create an Endpoint entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `Eviction(data?)` | `EvictionEntity` | Create an Eviction entity instance. |
| `LimitRange(data?)` | `LimitRangeEntity` | Create a LimitRange entity instance. |
| `LimitRangeList(data?)` | `LimitRangeListEntity` | Create a LimitRangeList entity instance. |
| `Limitrange(data?)` | `LimitrangeEntity` | Create a Limitrange entity instance. |
| `Namespace(data?)` | `NamespaceEntity` | Create a Namespace entity instance. |
| `Node(data?)` | `NodeEntity` | Create a Node entity instance. |
| `PersistentVolume(data?)` | `PersistentVolumeEntity` | Create a PersistentVolume entity instance. |
| `PersistentVolumeClaim(data?)` | `PersistentVolumeClaimEntity` | Create a PersistentVolumeClaim entity instance. |
| `PersistentVolumeClaimList(data?)` | `PersistentVolumeClaimListEntity` | Create a PersistentVolumeClaimList entity instance. |
| `Persistentvolume(data?)` | `PersistentvolumeEntity` | Create a Persistentvolume entity instance. |
| `Persistentvolumeclaim(data?)` | `PersistentvolumeclaimEntity` | Create a Persistentvolumeclaim entity instance. |
| `Pod(data?)` | `PodEntity` | Create a Pod entity instance. |
| `PodTemplate(data?)` | `PodTemplateEntity` | Create a PodTemplate entity instance. |
| `PodTemplateList(data?)` | `PodTemplateListEntity` | Create a PodTemplateList entity instance. |
| `Podtemplate(data?)` | `PodtemplateEntity` | Create a Podtemplate entity instance. |
| `ReplicationControllerList(data?)` | `ReplicationControllerListEntity` | Create a ReplicationControllerList entity instance. |
| `Replicationcontroller(data?)` | `ReplicationcontrollerEntity` | Create a Replicationcontroller entity instance. |
| `ResourceQuota(data?)` | `ResourceQuotaEntity` | Create a ResourceQuota entity instance. |
| `ResourceQuotaList(data?)` | `ResourceQuotaListEntity` | Create a ResourceQuotaList entity instance. |
| `Resourcequota(data?)` | `ResourcequotaEntity` | Create a Resourcequota entity instance. |
| `Scale(data?)` | `ScaleEntity` | Create a Scale entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `Service(data?)` | `ServiceEntity` | Create a Service entity instance. |
| `ServiceAccount(data?)` | `ServiceAccountEntity` | Create a ServiceAccount entity instance. |
| `ServiceAccountList(data?)` | `ServiceAccountListEntity` | Create a ServiceAccountList entity instance. |
| `Serviceaccount(data?)` | `ServiceaccountEntity` | Create a Serviceaccount entity instance. |
| `Status(data?)` | `StatusEntity` | Create a Status entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `tester(testopts?, sdkopts?)` | `KubernetesSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `KubernetesSDK.test(testopts?, sdkopts?)` | `KubernetesSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): KubernetesSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### ApiResourceList

| Field | Description |
| --- | --- |
| `categories` | categories is a list of the grouped resources this resource belongs to (e.g. |
| `group` | group is the preferred group of the resource. |
| `kind` | kind is the kind for the resource (e.g. |
| `name` | name is the plural name of the resource. |
| `namespaced` | namespaced indicates if a resource is namespaced or not. |
| `shortNames` | shortNames is a list of suggested short names of the resource. |
| `singularName` | singularName is the singular name of the resource. |
| `storageVersionHash` | The hash value of the storage version, the version this resource is converted to when written to the data store. |
| `verbs` | verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) |
| `version` | version is the preferred version of the resource. |

Operations: list.

API path: `/api/v1/`

#### Binding

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `target` | target is the target object that you want to bind to the standard object. |

Operations: create.

API path: `/api/v1/namespaces/{namespace}/pods/{name}/binding`

#### ComponentStatus

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `conditions` | List of component conditions observed |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | Standard object's metadata. |

Operations: list, load.

API path: `/api/v1/componentstatuses`

#### ConfigMap

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | binaryData contains the binary data. |
| `data` | data contains the configuration data. |
| `immutable` | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |

Operations: create, load, patch, update.

API path: `/api/v1/namespaces/{namespace}/configmaps`

#### ConfigMapList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | binaryData contains the binary data. |
| `data` | data contains the configuration data. |
| `immutable` | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/configmaps`

#### Configmap

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/configmaps/{name}`

#### CoreV1

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata. |
| `secrets` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |
| `spec` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | status represents the current information/status of a persistent volume claim. |
| `template` | template defines the pods that will be created from this pod template. |

Operations: create, list, load, patch, remove, update.

API path: `/api/v1/namespaces/{namespace}/persistentvolumeclaims`

#### Endpoint

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | Standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `subsets` | The set of all endpoints is the union of all subsets. |
| `type` |  |

Operations: create, list, load, patch, update.

API path: `/api/v1/namespaces/{namespace}/endpoints`

#### Event

| Field | Description |
| --- | --- |
| `action` | action is what action was taken/failed regarding to the Regarding object. |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `count` | count is the number of times this event has occurred. |
| `eventTime` | eventTime is the time when this Event was first observed. |
| `firstTimestamp` | firstTimestamp is the time at which the event was first recorded. |
| `id` |  |
| `involvedObject` | involvedObject is the object that this event is about. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `lastTimestamp` | lastTimestamp is the time at which the most recent occurrence of this event was recorded. |
| `message` | message is a human-readable description of the status of this operation. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `reason` | reason is a short, machine understandable string that gives the reason for the transition into the object's current status. |
| `related` | related is an optional secondary object for more complex actions. |
| `reportingComponent` | reportingComponent is the name of the controller that emitted this Event, e.g. |
| `reportingInstance` | reportingInstance is the ID of the controller instance, e.g. |
| `series` | series is data about the Event series this event represents or nil if it's a singleton Event. |
| `source` | source is the component reporting this event. |
| `type` | type is the type of this event (Normal, Warning), new types could be added in the future |

Operations: create, list, load, patch, update.

API path: `/api/v1/namespaces/{namespace}/events`

#### Eviction

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `deleteOptions` | deleteOptions may be provided |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata describes the pod that is being evicted. |

Operations: create.

API path: `/api/v1/namespaces/{namespace}/pods/{name}/eviction`

#### LimitRange

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec defines the limits enforced. |

Operations: create, load, patch, update.

API path: `/api/v1/namespaces/{namespace}/limitranges`

#### LimitRangeList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec defines the limits enforced. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/limitranges`

#### Limitrange

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/limitranges/{name}`

#### Namespace

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | spec defines the behavior of the Namespace. |
| `status` | status describes the current status of a Namespace. |
| `type` |  |

Operations: create, list, load, patch, update.

API path: `/api/v1/namespaces`

#### Node

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | spec defines the behavior of a node. |
| `status` | status is the most recently observed status of the node. |
| `type` |  |

Operations: create, list, load, patch, remove, update.

API path: `/api/v1/nodes`

#### PersistentVolume

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata. |
| `spec` | spec defines a specification of a persistent volume owned by the cluster. |
| `status` | status represents the current information/status for the persistent volume. |

Operations: load, remove, update.

API path: `/api/v1/persistentvolumes/{name}`

#### PersistentVolumeClaim

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata. |
| `spec` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | status represents the current information/status of a persistent volume claim. |

Operations: load, remove, update.

API path: `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}`

#### PersistentVolumeClaimList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata. |
| `spec` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | status represents the current information/status of a persistent volume claim. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/persistentvolumeclaims`

#### Persistentvolume

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/persistentvolumes/{name}`

#### Persistentvolumeclaim

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}`

#### Pod

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | spec is the specification of the desired behavior of the pod. |
| `status` | status is the most recently observed status of the pod. |
| `type` |  |

Operations: create, list, load, patch, remove, update.

API path: `/api/v1/namespaces/{namespace}/pods/{name}/exec`

#### PodTemplate

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `template` | template defines the pods that will be created from this pod template. |

Operations: load, remove.

API path: `/api/v1/namespaces/{namespace}/podtemplates/{name}`

#### PodTemplateList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `template` | template defines the pods that will be created from this pod template. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/podtemplates`

#### Podtemplate

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/podtemplates/{name}`

#### ReplicationControllerList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec defines the specification of the desired behavior of the replication controller. |
| `status` | status is the most recently observed status of the replication controller. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/replicationcontrollers`

#### Replicationcontroller

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | spec defines the specification of the desired behavior of the replication controller. |
| `status` | status is the most recently observed status of the replication controller. |
| `type` |  |

Operations: load, update.

API path: `/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}`

#### ResourceQuota

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec defines the desired quota. |
| `status` | status defines the actual enforced quota and its current usage. |

Operations: load, remove, update.

API path: `/api/v1/namespaces/{namespace}/resourcequotas/{name}`

#### ResourceQuotaList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec defines the desired quota. |
| `status` | status defines the actual enforced quota and its current usage. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/resourcequotas`

#### Resourcequota

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}`

#### Scale

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. |
| `spec` | spec defines the behavior of the scale. |
| `status` | status is the current status of the scale. |

Operations: load, patch, update.

API path: `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale`

#### Secret

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `data` | data contains the secret data. |
| `id` |  |
| `immutable` | immutable if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `stringData` | stringData allows specifying non-binary secret data in string form. |
| `type` | type is used to facilitate programmatic handling of secret data. |

Operations: create, list, load, patch, update.

API path: `/api/v1/namespaces/{namespace}/secrets`

#### Service

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `id` |  |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | spec defines the behavior of a service. |
| `status` | status is the most recently observed status of the service. |
| `type` |  |

Operations: create, list, load, patch, remove, update.

API path: `/api/v1/namespaces/{namespace}/services`

#### ServiceAccount

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `secrets` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

Operations: load, remove.

API path: `/api/v1/namespaces/{namespace}/serviceaccounts/{name}`

#### ServiceAccountList

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `secrets` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

Operations: list.

API path: `/api/v1/namespaces/{namespace}/serviceaccounts`

#### Serviceaccount

| Field | Description |
| --- | --- |
| `id` |  |
| `object` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` |  |

Operations: load.

API path: `/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}`

#### Status

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object metadata. |
| `spec` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | status represents the current information/status of a persistent volume claim. |

Operations: load, remove.

API path: `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status`

#### Token

| Field | Description |
| --- | --- |
| `apiVersion` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | metadata is the standard object's metadata. |
| `spec` | spec holds information about the request being evaluated |
| `status` | status is filled in by the server and indicates whether the token can be authenticated. |

Operations: create.

API path: `/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token`



## Entities


### ApiResourceList

Create an instance: `const api_resource_list = client.ApiResourceList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` | categories is a list of the grouped resources this resource belongs to (e.g. |
| `group` | `string` | group is the preferred group of the resource. |
| `kind` | `string` | kind is the kind for the resource (e.g. |
| `name` | `string` | name is the plural name of the resource. |
| `namespaced` | `boolean` | namespaced indicates if a resource is namespaced or not. |
| `shortNames` | `any[]` | shortNames is a list of suggested short names of the resource. |
| `singularName` | `string` | singularName is the singular name of the resource. |
| `storageVersionHash` | `string` | The hash value of the storage version, the version this resource is converted to when written to the data store. |
| `verbs` | `any[]` | verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy) |
| `version` | `string` | version is the preferred version of the resource. |

#### Example: List

```ts
const api_resource_lists = await client.ApiResourceList().list()
```


### Binding

Create an instance: `const binding = client.Binding()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `target` | `any` | target is the target object that you want to bind to the standard object. |

#### Example: Create

```ts
const binding = await client.Binding().create({
  namespace_id: 'example_namespace_id',
  target: 'example_target',
})
```


### ComponentStatus

Create an instance: `const component_status = client.ComponentStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `conditions` | `any[]` | List of component conditions observed |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | Standard object's metadata. |

#### Example: Load

```ts
const component_status = await client.ComponentStatus().load({ name: 'name' })
```

#### Example: List

```ts
const component_statuss = await client.ComponentStatus().list()
```


### ConfigMap

Create an instance: `const config_map = client.ConfigMap()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | `Record<string, any>` | binaryData contains the binary data. |
| `data` | `Record<string, any>` | data contains the configuration data. |
| `immutable` | `boolean` | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |

#### Example: Load

```ts
const config_map = await client.ConfigMap().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### Example: Create

```ts
const config_map = await client.ConfigMap().create({
  namespace_id: 'example_namespace_id',
})
```


### ConfigMapList

Create an instance: `const config_map_list = client.ConfigMapList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `binaryData` | `Record<string, any>` | binaryData contains the binary data. |
| `data` | `Record<string, any>` | data contains the configuration data. |
| `immutable` | `boolean` | immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |

#### Example: List

```ts
const config_map_lists = await client.ConfigMapList().list()
```


### Configmap

Create an instance: `const configmap = client.Configmap()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const configmap = await client.Configmap().load({ id: 'configmap_id', namespace_id: 'namespace_id' })
```


### CoreV1

Create an instance: `const core_v1 = client.CoreV1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata. |
| `secrets` | `any[]` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |
| `spec` | `any` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | status represents the current information/status of a persistent volume claim. |
| `template` | `any` | template defines the pods that will be created from this pod template. |

#### Example: Load

```ts
const core_v1 = await client.CoreV1().load({ node_id: 'node_id' })
```

#### Example: List

```ts
const core_v1s = await client.CoreV1().list()
```

#### Example: Create

```ts
const core_v1 = await client.CoreV1().create({
  node_id: 'example_node_id',
})
```


### Endpoint

Create an instance: `const endpoint = client.Endpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | Standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `subsets` | `any[]` | The set of all endpoints is the union of all subsets. |
| `type` | `string` |  |

#### Example: Load

```ts
const endpoint = await client.Endpoint().load({ id: 'endpoint_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const endpoints = await client.Endpoint().list()
```

#### Example: Create

```ts
const endpoint = await client.Endpoint().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```


### Event

Create an instance: `const event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` | action is what action was taken/failed regarding to the Regarding object. |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `count` | `number` | count is the number of times this event has occurred. |
| `eventTime` | `any` | eventTime is the time when this Event was first observed. |
| `firstTimestamp` | `any` | firstTimestamp is the time at which the event was first recorded. |
| `id` | `string` |  |
| `involvedObject` | `any` | involvedObject is the object that this event is about. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `lastTimestamp` | `any` | lastTimestamp is the time at which the most recent occurrence of this event was recorded. |
| `message` | `string` | message is a human-readable description of the status of this operation. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `reason` | `string` | reason is a short, machine understandable string that gives the reason for the transition into the object's current status. |
| `related` | `any` | related is an optional secondary object for more complex actions. |
| `reportingComponent` | `string` | reportingComponent is the name of the controller that emitted this Event, e.g. |
| `reportingInstance` | `string` | reportingInstance is the ID of the controller instance, e.g. |
| `series` | `any` | series is data about the Event series this event represents or nil if it's a singleton Event. |
| `source` | `any` | source is the component reporting this event. |
| `type` | `string` | type is the type of this event (Normal, Warning), new types could be added in the future |

#### Example: Load

```ts
const event = await client.Event().load({ id: 'event_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const events = await client.Event().list()
```

#### Example: Create

```ts
const event = await client.Event().create({
  namespace_id: 'example_namespace_id',
  involvedObject: 'example_involvedObject',
  metadata: 'example_metadata',
  object: 'example_object',
  type: 'example_type',
})
```


### Eviction

Create an instance: `const eviction = client.Eviction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `deleteOptions` | `any` | deleteOptions may be provided |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata describes the pod that is being evicted. |

#### Example: Create

```ts
const eviction = await client.Eviction().create({
  name: 'example_name',
  namespace_id: 'example_namespace_id',
})
```


### LimitRange

Create an instance: `const limit_range = client.LimitRange()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec defines the limits enforced. |

#### Example: Load

```ts
const limit_range = await client.LimitRange().load({ name: 'name', namespace_id: 'namespace_id' })
```

#### Example: Create

```ts
const limit_range = await client.LimitRange().create({
  namespace_id: 'example_namespace_id',
})
```


### LimitRangeList

Create an instance: `const limit_range_list = client.LimitRangeList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec defines the limits enforced. |

#### Example: List

```ts
const limit_range_lists = await client.LimitRangeList().list()
```


### Limitrange

Create an instance: `const limitrange = client.Limitrange()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const limitrange = await client.Limitrange().load({ id: 'limitrange_id', namespace_id: 'namespace_id' })
```


### Namespace

Create an instance: `const namespace = client.Namespace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | spec defines the behavior of the Namespace. |
| `status` | `any` | status describes the current status of a Namespace. |
| `type` | `string` |  |

#### Example: Load

```ts
const namespace = await client.Namespace().load({ id: 'namespace_id' })
```

#### Example: List

```ts
const namespaces = await client.Namespace().list()
```

#### Example: Create

```ts
const namespace = await client.Namespace().create({
  object: 'example_object',
  type: 'example_type',
})
```


### Node

Create an instance: `const node = client.Node()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | spec defines the behavior of a node. |
| `status` | `any` | status is the most recently observed status of the node. |
| `type` | `string` |  |

#### Example: Load

```ts
const node = await client.Node().load({ id: 'node_id' })
```

#### Example: List

```ts
const nodes = await client.Node().list()
```

#### Example: Create

```ts
const node = await client.Node().create({
  object: 'example_object',
  type: 'example_type',
})
```


### PersistentVolume

Create an instance: `const persistent_volume = client.PersistentVolume()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata. |
| `spec` | `any` | spec defines a specification of a persistent volume owned by the cluster. |
| `status` | `any` | status represents the current information/status for the persistent volume. |

#### Example: Load

```ts
const persistent_volume = await client.PersistentVolume().load({ name: 'name' })
```


### PersistentVolumeClaim

Create an instance: `const persistent_volume_claim = client.PersistentVolumeClaim()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata. |
| `spec` | `any` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | status represents the current information/status of a persistent volume claim. |

#### Example: Load

```ts
const persistent_volume_claim = await client.PersistentVolumeClaim().load({ name: 'name', namespace_id: 'namespace_id' })
```


### PersistentVolumeClaimList

Create an instance: `const persistent_volume_claim_list = client.PersistentVolumeClaimList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata. |
| `spec` | `any` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | status represents the current information/status of a persistent volume claim. |

#### Example: List

```ts
const persistent_volume_claim_lists = await client.PersistentVolumeClaimList().list()
```


### Persistentvolume

Create an instance: `const persistentvolume = client.Persistentvolume()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const persistentvolume = await client.Persistentvolume().load({ id: 'persistentvolume_id' })
```


### Persistentvolumeclaim

Create an instance: `const persistentvolumeclaim = client.Persistentvolumeclaim()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const persistentvolumeclaim = await client.Persistentvolumeclaim().load({ id: 'persistentvolumeclaim_id', namespace_id: 'namespace_id' })
```


### Pod

Create an instance: `const pod = client.Pod()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | spec is the specification of the desired behavior of the pod. |
| `status` | `any` | status is the most recently observed status of the pod. |
| `type` | `string` |  |

#### Example: Load

```ts
const pod = await client.Pod().load({ id: 'pod_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const pods = await client.Pod().list()
```

#### Example: Create

```ts
const pod = await client.Pod().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```


### PodTemplate

Create an instance: `const pod_template = client.PodTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `template` | `any` | template defines the pods that will be created from this pod template. |

#### Example: Load

```ts
const pod_template = await client.PodTemplate().load({ name: 'name', namespace_id: 'namespace_id' })
```


### PodTemplateList

Create an instance: `const pod_template_list = client.PodTemplateList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `template` | `any` | template defines the pods that will be created from this pod template. |

#### Example: List

```ts
const pod_template_lists = await client.PodTemplateList().list()
```


### Podtemplate

Create an instance: `const podtemplate = client.Podtemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const podtemplate = await client.Podtemplate().load({ id: 'podtemplate_id', namespace_id: 'namespace_id' })
```


### ReplicationControllerList

Create an instance: `const replication_controller_list = client.ReplicationControllerList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec defines the specification of the desired behavior of the replication controller. |
| `status` | `any` | status is the most recently observed status of the replication controller. |

#### Example: List

```ts
const replication_controller_lists = await client.ReplicationControllerList().list()
```


### Replicationcontroller

Create an instance: `const replicationcontroller = client.Replicationcontroller()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | spec defines the specification of the desired behavior of the replication controller. |
| `status` | `any` | status is the most recently observed status of the replication controller. |
| `type` | `string` |  |

#### Example: Load

```ts
const replicationcontroller = await client.Replicationcontroller().load({ id: 'replicationcontroller_id', namespace_id: 'namespace_id' })
```


### ResourceQuota

Create an instance: `const resource_quota = client.ResourceQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec defines the desired quota. |
| `status` | `any` | status defines the actual enforced quota and its current usage. |

#### Example: Load

```ts
const resource_quota = await client.ResourceQuota().load({ name: 'name', namespace_id: 'namespace_id' })
```


### ResourceQuotaList

Create an instance: `const resource_quota_list = client.ResourceQuotaList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec defines the desired quota. |
| `status` | `any` | status defines the actual enforced quota and its current usage. |

#### Example: List

```ts
const resource_quota_lists = await client.ResourceQuotaList().list()
```


### Resourcequota

Create an instance: `const resourcequota = client.Resourcequota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const resourcequota = await client.Resourcequota().load({ id: 'resourcequota_id', namespace_id: 'namespace_id' })
```


### Scale

Create an instance: `const scale = client.Scale()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. |
| `spec` | `any` | spec defines the behavior of the scale. |
| `status` | `any` | status is the current status of the scale. |

#### Example: Load

```ts
const scale = await client.Scale().load({ name: 'name', namespace_id: 'namespace_id' })
```


### Secret

Create an instance: `const secret = client.Secret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `data` | `Record<string, any>` | data contains the secret data. |
| `id` | `string` |  |
| `immutable` | `boolean` | immutable if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `stringData` | `Record<string, any>` | stringData allows specifying non-binary secret data in string form. |
| `type` | `string` | type is used to facilitate programmatic handling of secret data. |

#### Example: Load

```ts
const secret = await client.Secret().load({ id: 'secret_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const secrets = await client.Secret().list()
```

#### Example: Create

```ts
const secret = await client.Secret().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```


### Service

Create an instance: `const service = client.Service()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `id` | `string` |  |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `spec` | `any` | spec defines the behavior of a service. |
| `status` | `any` | status is the most recently observed status of the service. |
| `type` | `string` |  |

#### Example: Load

```ts
const service = await client.Service().load({ id: 'service_id', namespace_id: 'namespace_id' })
```

#### Example: List

```ts
const services = await client.Service().list()
```

#### Example: Create

```ts
const service = await client.Service().create({
  namespace_id: 'example_namespace_id',
  object: 'example_object',
  type: 'example_type',
})
```


### ServiceAccount

Create an instance: `const service_account = client.ServiceAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `secrets` | `any[]` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

#### Example: Load

```ts
const service_account = await client.ServiceAccount().load({ name: 'name', namespace_id: 'namespace_id' })
```


### ServiceAccountList

Create an instance: `const service_account_list = client.ServiceAccountList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `automountServiceAccountToken` | `boolean` | automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. |
| `imagePullSecrets` | `any[]` | imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `secrets` | `any[]` | secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. |

#### Example: List

```ts
const service_account_lists = await client.ServiceAccountList().list()
```


### Serviceaccount

Create an instance: `const serviceaccount = client.Serviceaccount()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `object` | `any` | Object is: * If Type is Added or Modified: the new state of the object. |
| `type` | `string` |  |

#### Example: Load

```ts
const serviceaccount = await client.Serviceaccount().load({ id: 'serviceaccount_id', namespace_id: 'namespace_id' })
```


### Status

Create an instance: `const status = client.Status()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object metadata. |
| `spec` | `any` | spec defines the desired characteristics of a volume requested by a pod author. |
| `status` | `any` | status represents the current information/status of a persistent volume claim. |

#### Example: Load

```ts
const status = await client.Status().load({ name: 'name' })
```


### Token

Create an instance: `const token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apiVersion` | `string` | APIVersion defines the versioned schema of this representation of an object. |
| `kind` | `string` | Kind is a string value representing the REST resource this object represents. |
| `metadata` | `any` | metadata is the standard object's metadata. |
| `spec` | `any` | spec holds information about the request being evaluated |
| `status` | `any` | status is filled in by the server and indicates whether the token can be authenticated. |

#### Example: Create

```ts
const token = await client.Token().create({
  name: 'example_name',
  namespace_id: 'example_namespace_id',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
kubernetes/
├── src/
│   ├── KubernetesSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { KubernetesSDK } from '@voxgig-sdk/kubernetes-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const resourcequota = client.ResourceQuota()
await resourcequota.load({ name: "example", namespace_id: "example" })

// resourcequota.data() now returns the resourcequota data from the last `load`
// resourcequota.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
