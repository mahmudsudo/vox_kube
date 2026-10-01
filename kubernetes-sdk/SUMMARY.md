# Kubernetes

The Kubernetes API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 37 entities and 236 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### ApiResourceList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `categories`: categories is a list of the grouped resources this resource belongs to (for example &#39;all&#39;)
- `group`: group is the preferred group of the resource. Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale&quot;.
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `name`: name is the plural name of the resource.
- `namespaced`: namespaced indicates if a resource is namespaced or not.

### Binding

Results: OK; Created; Accepted.

SDK operations: `create`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `target`: target is the target object that you want to bind to the standard object.

### ComponentStatus

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `conditions`: List of component conditions observed
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

### ConfigMap

Results: OK; Created; Accepted.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `binaryData`: binaryData contains the binary data. Each key must consist of alphanumeric characters, &#39;-&#39;, &#39;_&#39; or &#39;.&#39;. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. Note: BinaryData keys are not currently propagated to container env vars via ConfigMapKeyRef or ConfigMapRef env sources; only Data keys are used.
- `data`: data contains the configuration data. Each key must consist of alphanumeric characters, &#39;-&#39;, &#39;_&#39; or &#39;.&#39;. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
- `immutable`: immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

### ConfigMapList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `binaryData`: binaryData contains the binary data. Each key must consist of alphanumeric characters, &#39;-&#39;, &#39;_&#39; or &#39;.&#39;. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. Note: BinaryData keys are not currently propagated to container env vars via ConfigMapKeyRef or ConfigMapRef env sources; only Data keys are used.
- `data`: data contains the configuration data. Each key must consist of alphanumeric characters, &#39;-&#39;, &#39;_&#39; or &#39;.&#39;. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
- `immutable`: immutable if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

### Configmap

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### CoreV1

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `automountServiceAccountToken`: automountServiceAccountToken indicates whether a service account token should be automatically mounted.
- `imagePullSecrets`: imagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata

### Endpoint

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `subsets`: The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.

### Event

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `action`: action is what action was taken/failed regarding to the Regarding object.
- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `count`: count is the number of times this event has occurred.
- `eventTime`: eventTime is the time when this Event was first observed.
- `firstTimestamp`: firstTimestamp is the time at which the event was first recorded. (Time of server receipt is in TypeMeta.)

### Eviction

Results: OK; Created; Accepted.

SDK operations: `create`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `deleteOptions`: deleteOptions may be provided
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata describes the pod that is being evicted.

### LimitRange

Results: OK; Created; Accepted.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### LimitRangeList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `spec`: spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### Limitrange

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### Namespace

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `spec`: spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### Node

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `spec`: spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### PersistentVolume

Results: OK; Accepted; Created.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
- `status`: status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes

### PersistentVolumeClaim

Results: OK; Accepted; Created.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
- `status`: status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims

### PersistentVolumeClaimList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `spec`: spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
- `status`: status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims

### Persistentvolume

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### Persistentvolumeclaim

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### Pod

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `spec`: spec is the specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### PodTemplate

Results: OK; Accepted.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `template`: template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### PodTemplateList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `template`: template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### Podtemplate

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### ReplicationControllerList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `spec`: spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
- `status`: status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### Replicationcontroller

Results: OK; Created.

SDK operations: `load`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `spec`: spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### ResourceQuota

Results: OK; Accepted; Created.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec defines the desired quota. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
- `status`: status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### ResourceQuotaList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `spec`: spec defines the desired quota. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
- `status`: status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### Resourcequota

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### Scale

Results: OK; Created.

SDK operations: `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
- `spec`: spec defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
- `status`: status is the current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only.

### Secret

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `data`: data contains the secret data. Each key must consist of alphanumeric characters, &#39;-&#39;, &#39;_&#39; or &#39;.&#39;. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
- `immutable`: immutable if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata

### Service

Results: OK; Created; Accepted.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.
- `spec`: spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status

### ServiceAccount

Results: OK; Accepted.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `automountServiceAccountToken`: automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
- `imagePullSecrets`: imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata

### ServiceAccountList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `automountServiceAccountToken`: automountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
- `imagePullSecrets`: imagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds

### Serviceaccount

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: Object is: * If Type is Added or Modified: the new state of the object. * If Type is Deleted: the state of the object immediately before deletion. * If Type is Error: *Status is recommended; other types may make sense depending on context.

### Status

Results: OK; Accepted.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
- `status`: status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims

### Token

Results: OK; Created; Accepted.

SDK operations: `create`.

Key fields to recognise:

- `apiVersion`: APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
- `kind`: Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
- `metadata`: metadata is the standard object&#39;s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
- `spec`: spec holds information about the request being evaluated
- `status`: status is filled in by the server and indicates whether the token can be authenticated.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| ApiResourceList | `list` | `GET /api/v1/` | See reference |
| Binding | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/binding` | See reference |
| Binding | `create` | `POST /api/v1/namespaces/{namespace}/bindings` | See reference |
| ComponentStatus | `list` | `GET /api/v1/componentstatuses` | See reference |
| ComponentStatus | `load` | `GET /api/v1/componentstatuses/{name}` | See reference |
| ConfigMap | `create` | `POST /api/v1/namespaces/{namespace}/configmaps` | See reference |
| ConfigMap | `load` | `GET /api/v1/namespaces/{namespace}/configmaps/{name}` | See reference |
| ConfigMap | `patch` | `PATCH /api/v1/namespaces/{namespace}/configmaps/{name}` | See reference |
| ConfigMap | `update` | `PUT /api/v1/namespaces/{namespace}/configmaps/{name}` | See reference |
| ConfigMapList | `list` | `GET /api/v1/namespaces/{namespace}/configmaps` | See reference |
| ConfigMapList | `list` | `GET /api/v1/configmaps` | See reference |
| Configmap | `load` | `GET /api/v1/watch/namespaces/{namespace}/configmaps/{name}` | See reference |
| Configmap | `load` | `GET /api/v1/watch/namespaces/{namespace}/configmaps` | See reference |
| Configmap | `load` | `GET /api/v1/watch/configmaps` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/persistentvolumeclaims` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/podtemplates` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/replicationcontrollers` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/resourcequotas` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/serviceaccounts` | See reference |
| CoreV1 | `create` | `POST /api/v1/persistentvolumes` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/proxy` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/services/{name}/proxy` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}` | See reference |
| CoreV1 | `create` | `POST /api/v1/namespaces/{namespace}/services/{name}/proxy/{path}` | See reference |
| CoreV1 | `create` | `POST /api/v1/nodes/{name}/proxy` | See reference |
| CoreV1 | `create` | `POST /api/v1/nodes/{name}/proxy/{path}` | See reference |
| CoreV1 | `list` | `GET /api/v1/persistentvolumes` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/log` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/exec` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/attach` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/proxy` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/services/{name}/proxy` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/portforward` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}` | See reference |
| CoreV1 | `load` | `GET /api/v1/namespaces/{namespace}/services/{name}/proxy/{path}` | See reference |
| CoreV1 | `load` | `GET /api/v1/nodes/{name}/proxy` | See reference |
| CoreV1 | `load` | `GET /api/v1/nodes/{name}/proxy/{path}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/podtemplates/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/replicationcontrollers/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/resourcequotas/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/serviceaccounts/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/persistentvolumes/{name}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}/proxy` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/services/{name}/proxy` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/namespaces/{namespace}/services/{name}/proxy/{path}` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/nodes/{name}/proxy` | See reference |
| CoreV1 | `patch` | `PATCH /api/v1/nodes/{name}/proxy/{path}` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/persistentvolumes` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/namespaces/{namespace}/pods/{name}/proxy` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/namespaces/{namespace}/services/{name}/proxy` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/namespaces/{namespace}/services/{name}/proxy/{path}` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/nodes/{name}/proxy` | See reference |
| CoreV1 | `remove` | `DELETE /api/v1/nodes/{name}/proxy/{path}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/podtemplates/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/replicationcontrollers/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/resourcequotas/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/serviceaccounts/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/persistentvolumes/{name}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}/proxy` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/services/{name}/proxy` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/namespaces/{namespace}/services/{name}/proxy/{path}` | See reference |
| CoreV1 | `update` | `PUT /api/v1/nodes/{name}/proxy` | See reference |
| CoreV1 | `update` | `PUT /api/v1/nodes/{name}/proxy/{path}` | See reference |
| Endpoint | `create` | `POST /api/v1/namespaces/{namespace}/endpoints` | See reference |
| Endpoint | `list` | `GET /api/v1/namespaces/{namespace}/endpoints` | See reference |
| Endpoint | `list` | `GET /api/v1/endpoints` | See reference |
| Endpoint | `load` | `GET /api/v1/watch/namespaces/{namespace}/endpoints/{name}` | See reference |
| Endpoint | `load` | `GET /api/v1/watch/namespaces/{namespace}/endpoints` | See reference |
| Endpoint | `load` | `GET /api/v1/watch/endpoints` | See reference |
| Endpoint | `load` | `GET /api/v1/namespaces/{namespace}/endpoints/{name}` | See reference |
| Endpoint | `patch` | `PATCH /api/v1/namespaces/{namespace}/endpoints/{name}` | See reference |
| Endpoint | `update` | `PUT /api/v1/namespaces/{namespace}/endpoints/{name}` | See reference |
| Event | `create` | `POST /api/v1/namespaces/{namespace}/events` | See reference |
| Event | `list` | `GET /api/v1/namespaces/{namespace}/events` | See reference |
| Event | `list` | `GET /api/v1/events` | See reference |
| Event | `load` | `GET /api/v1/watch/namespaces/{namespace}/events/{name}` | See reference |
| Event | `load` | `GET /api/v1/watch/namespaces/{namespace}/events` | See reference |
| Event | `load` | `GET /api/v1/watch/events` | See reference |
| Event | `load` | `GET /api/v1/namespaces/{namespace}/events/{name}` | See reference |
| Event | `patch` | `PATCH /api/v1/namespaces/{namespace}/events/{name}` | See reference |
| Event | `update` | `PUT /api/v1/namespaces/{namespace}/events/{name}` | See reference |
| Eviction | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/eviction` | See reference |
| LimitRange | `create` | `POST /api/v1/namespaces/{namespace}/limitranges` | See reference |
| LimitRange | `load` | `GET /api/v1/namespaces/{namespace}/limitranges/{name}` | See reference |
| LimitRange | `patch` | `PATCH /api/v1/namespaces/{namespace}/limitranges/{name}` | See reference |
| LimitRange | `update` | `PUT /api/v1/namespaces/{namespace}/limitranges/{name}` | See reference |
| LimitRangeList | `list` | `GET /api/v1/namespaces/{namespace}/limitranges` | See reference |
| LimitRangeList | `list` | `GET /api/v1/limitranges` | See reference |
| Limitrange | `load` | `GET /api/v1/watch/namespaces/{namespace}/limitranges/{name}` | See reference |
| Limitrange | `load` | `GET /api/v1/watch/namespaces/{namespace}/limitranges` | See reference |
| Limitrange | `load` | `GET /api/v1/watch/limitranges` | See reference |
| Namespace | `create` | `POST /api/v1/namespaces` | See reference |
| Namespace | `list` | `GET /api/v1/namespaces` | See reference |
| Namespace | `load` | `GET /api/v1/watch/namespaces/{name}` | See reference |
| Namespace | `load` | `GET /api/v1/watch/namespaces` | See reference |
| Namespace | `load` | `GET /api/v1/namespaces/{name}` | See reference |
| Namespace | `load` | `GET /api/v1/namespaces/{name}/status` | See reference |
| Namespace | `patch` | `PATCH /api/v1/namespaces/{name}` | See reference |
| Namespace | `patch` | `PATCH /api/v1/namespaces/{name}/status` | See reference |
| Namespace | `update` | `PUT /api/v1/namespaces/{name}` | See reference |
| Namespace | `update` | `PUT /api/v1/namespaces/{name}/finalize` | See reference |
| Namespace | `update` | `PUT /api/v1/namespaces/{name}/status` | See reference |
| Node | `create` | `POST /api/v1/nodes` | See reference |
| Node | `list` | `GET /api/v1/nodes` | See reference |
| Node | `load` | `GET /api/v1/watch/nodes/{name}` | See reference |
| Node | `load` | `GET /api/v1/watch/nodes` | See reference |
| Node | `load` | `GET /api/v1/nodes/{name}` | See reference |
| Node | `load` | `GET /api/v1/nodes/{name}/status` | See reference |
| Node | `patch` | `PATCH /api/v1/nodes/{name}` | See reference |
| Node | `patch` | `PATCH /api/v1/nodes/{name}/status` | See reference |
| Node | `remove` | `DELETE /api/v1/nodes` | See reference |
| Node | `update` | `PUT /api/v1/nodes/{name}` | See reference |
| Node | `update` | `PUT /api/v1/nodes/{name}/status` | See reference |
| PersistentVolume | `load` | `GET /api/v1/persistentvolumes/{name}` | See reference |
| PersistentVolume | `remove` | `DELETE /api/v1/persistentvolumes/{name}` | See reference |
| PersistentVolume | `update` | `PATCH /api/v1/persistentvolumes/{name}/status` | See reference |
| PersistentVolume | `update` | `PUT /api/v1/persistentvolumes/{name}/status` | See reference |
| PersistentVolumeClaim | `load` | `GET /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}` | See reference |
| PersistentVolumeClaim | `remove` | `DELETE /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}` | See reference |
| PersistentVolumeClaim | `update` | `PATCH /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status` | See reference |
| PersistentVolumeClaim | `update` | `PUT /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status` | See reference |
| PersistentVolumeClaimList | `list` | `GET /api/v1/namespaces/{namespace}/persistentvolumeclaims` | See reference |
| PersistentVolumeClaimList | `list` | `GET /api/v1/persistentvolumeclaims` | See reference |
| Persistentvolume | `load` | `GET /api/v1/watch/persistentvolumes/{name}` | See reference |
| Persistentvolume | `load` | `GET /api/v1/watch/persistentvolumes` | See reference |
| Persistentvolumeclaim | `load` | `GET /api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}` | See reference |
| Persistentvolumeclaim | `load` | `GET /api/v1/watch/namespaces/{namespace}/persistentvolumeclaims` | See reference |
| Persistentvolumeclaim | `load` | `GET /api/v1/watch/persistentvolumeclaims` | See reference |
| Pod | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/exec` | See reference |
| Pod | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/attach` | See reference |
| Pod | `create` | `POST /api/v1/namespaces/{namespace}/pods` | See reference |
| Pod | `create` | `POST /api/v1/namespaces/{namespace}/pods/{name}/portforward` | See reference |
| Pod | `list` | `GET /api/v1/namespaces/{namespace}/pods` | See reference |
| Pod | `list` | `GET /api/v1/pods` | See reference |
| Pod | `load` | `GET /api/v1/watch/namespaces/{namespace}/pods/{name}` | See reference |
| Pod | `load` | `GET /api/v1/watch/namespaces/{namespace}/pods` | See reference |
| Pod | `load` | `GET /api/v1/watch/pods` | See reference |
| Pod | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}` | See reference |
| Pod | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | See reference |
| Pod | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/resize` | See reference |
| Pod | `load` | `GET /api/v1/namespaces/{namespace}/pods/{name}/status` | See reference |
| Pod | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}` | See reference |
| Pod | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | See reference |
| Pod | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}/resize` | See reference |
| Pod | `patch` | `PATCH /api/v1/namespaces/{namespace}/pods/{name}/status` | See reference |
| Pod | `remove` | `DELETE /api/v1/namespaces/{namespace}/pods/{name}` | See reference |
| Pod | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}` | See reference |
| Pod | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers` | See reference |
| Pod | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}/resize` | See reference |
| Pod | `update` | `PUT /api/v1/namespaces/{namespace}/pods/{name}/status` | See reference |
| PodTemplate | `load` | `GET /api/v1/namespaces/{namespace}/podtemplates/{name}` | See reference |
| PodTemplate | `remove` | `DELETE /api/v1/namespaces/{namespace}/podtemplates/{name}` | See reference |
| PodTemplateList | `list` | `GET /api/v1/namespaces/{namespace}/podtemplates` | See reference |
| PodTemplateList | `list` | `GET /api/v1/podtemplates` | See reference |
| Podtemplate | `load` | `GET /api/v1/watch/namespaces/{namespace}/podtemplates/{name}` | See reference |
| Podtemplate | `load` | `GET /api/v1/watch/namespaces/{namespace}/podtemplates` | See reference |
| Podtemplate | `load` | `GET /api/v1/watch/podtemplates` | See reference |
| ReplicationControllerList | `list` | `GET /api/v1/namespaces/{namespace}/replicationcontrollers` | See reference |
| ReplicationControllerList | `list` | `GET /api/v1/replicationcontrollers` | See reference |
| Replicationcontroller | `load` | `GET /api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}` | See reference |
| Replicationcontroller | `load` | `GET /api/v1/watch/namespaces/{namespace}/replicationcontrollers` | See reference |
| Replicationcontroller | `load` | `GET /api/v1/watch/replicationcontrollers` | See reference |
| Replicationcontroller | `load` | `GET /api/v1/namespaces/{namespace}/replicationcontrollers/{name}` | See reference |
| Replicationcontroller | `update` | `PATCH /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status` | See reference |
| Replicationcontroller | `update` | `PUT /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status` | See reference |
| ResourceQuota | `load` | `GET /api/v1/namespaces/{namespace}/resourcequotas/{name}` | See reference |
| ResourceQuota | `remove` | `DELETE /api/v1/namespaces/{namespace}/resourcequotas/{name}` | See reference |
| ResourceQuota | `update` | `PATCH /api/v1/namespaces/{namespace}/resourcequotas/{name}/status` | See reference |
| ResourceQuota | `update` | `PUT /api/v1/namespaces/{namespace}/resourcequotas/{name}/status` | See reference |
| ResourceQuotaList | `list` | `GET /api/v1/namespaces/{namespace}/resourcequotas` | See reference |
| ResourceQuotaList | `list` | `GET /api/v1/resourcequotas` | See reference |
| Resourcequota | `load` | `GET /api/v1/watch/namespaces/{namespace}/resourcequotas/{name}` | See reference |
| Resourcequota | `load` | `GET /api/v1/watch/namespaces/{namespace}/resourcequotas` | See reference |
| Resourcequota | `load` | `GET /api/v1/watch/resourcequotas` | See reference |
| Scale | `load` | `GET /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale` | See reference |
| Scale | `patch` | `PATCH /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale` | See reference |
| Scale | `update` | `PUT /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale` | See reference |
| Secret | `create` | `POST /api/v1/namespaces/{namespace}/secrets` | See reference |
| Secret | `list` | `GET /api/v1/namespaces/{namespace}/secrets` | See reference |
| Secret | `list` | `GET /api/v1/secrets` | See reference |
| Secret | `load` | `GET /api/v1/watch/namespaces/{namespace}/secrets/{name}` | See reference |
| Secret | `load` | `GET /api/v1/watch/namespaces/{namespace}/secrets` | See reference |
| Secret | `load` | `GET /api/v1/watch/secrets` | See reference |
| Secret | `load` | `GET /api/v1/namespaces/{namespace}/secrets/{name}` | See reference |
| Secret | `patch` | `PATCH /api/v1/namespaces/{namespace}/secrets/{name}` | See reference |
| Secret | `update` | `PUT /api/v1/namespaces/{namespace}/secrets/{name}` | See reference |
| Service | `create` | `POST /api/v1/namespaces/{namespace}/services` | See reference |
| Service | `list` | `GET /api/v1/namespaces/{namespace}/services` | See reference |
| Service | `list` | `GET /api/v1/services` | See reference |
| Service | `load` | `GET /api/v1/watch/namespaces/{namespace}/services/{name}` | See reference |
| Service | `load` | `GET /api/v1/watch/namespaces/{namespace}/services` | See reference |
| Service | `load` | `GET /api/v1/watch/services` | See reference |
| Service | `load` | `GET /api/v1/namespaces/{namespace}/services/{name}` | See reference |
| Service | `load` | `GET /api/v1/namespaces/{namespace}/services/{name}/status` | See reference |
| Service | `patch` | `PATCH /api/v1/namespaces/{namespace}/services/{name}` | See reference |
| Service | `patch` | `PATCH /api/v1/namespaces/{namespace}/services/{name}/status` | See reference |
| Service | `remove` | `DELETE /api/v1/namespaces/{namespace}/services/{name}` | See reference |
| Service | `update` | `PUT /api/v1/namespaces/{namespace}/services/{name}` | See reference |
| Service | `update` | `PUT /api/v1/namespaces/{namespace}/services/{name}/status` | See reference |
| ServiceAccount | `load` | `GET /api/v1/namespaces/{namespace}/serviceaccounts/{name}` | See reference |
| ServiceAccount | `remove` | `DELETE /api/v1/namespaces/{namespace}/serviceaccounts/{name}` | See reference |
| ServiceAccountList | `list` | `GET /api/v1/namespaces/{namespace}/serviceaccounts` | See reference |
| ServiceAccountList | `list` | `GET /api/v1/serviceaccounts` | See reference |
| Serviceaccount | `load` | `GET /api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}` | See reference |
| Serviceaccount | `load` | `GET /api/v1/watch/namespaces/{namespace}/serviceaccounts` | See reference |
| Serviceaccount | `load` | `GET /api/v1/watch/serviceaccounts` | See reference |
| Status | `load` | `GET /api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status` | See reference |
| Status | `load` | `GET /api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status` | See reference |
| Status | `load` | `GET /api/v1/namespaces/{namespace}/resourcequotas/{name}/status` | See reference |
| Status | `load` | `GET /api/v1/persistentvolumes/{name}/status` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/configmaps` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/endpoints` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/events` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/limitranges` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/persistentvolumeclaims` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/pods` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/podtemplates` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/replicationcontrollers` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/resourcequotas` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/secrets` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/serviceaccounts` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/services` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/configmaps/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/endpoints/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/events/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/limitranges/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/replicationcontrollers/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{namespace}/secrets/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/namespaces/{name}` | See reference |
| Status | `remove` | `DELETE /api/v1/nodes/{name}` | See reference |
| Token | `create` | `POST /api/v1/namespaces/{namespace}/serviceaccounts/{name}/token` | See reference |

## Connect to the API

- API server: `{base}`

The default credential is sent in the `authorization` header with the `Token` prefix.

Bearer Token authentication

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

