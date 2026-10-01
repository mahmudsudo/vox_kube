import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "api_resource_list",
    "accessor": "ApiResourceList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "groupVersion": "x",
      "kind": "x",
      "resources": [
        {
          "categories": [
            "x"
          ],
          "group": "x",
          "kind": "x",
          "name": "x",
          "namespaced": true,
          "shortNames": [
            "x"
          ],
          "singularName": "x",
          "storageVersionHash": "x",
          "verbs": [
            "x"
          ],
          "version": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "binding",
    "accessor": "Binding",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/binding",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "target": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "binding",
    "accessor": "Binding",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/bindings",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "target": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_status",
    "accessor": "ComponentStatus",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/componentstatuses",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "conditions": [
            {
              "error": "x",
              "message": "x",
              "status": "x",
              "type": "x"
            }
          ],
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_status",
    "accessor": "ComponentStatus",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/componentstatuses/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "conditions": [
        {
          "error": "x",
          "message": "x",
          "status": "x",
          "type": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "config_map",
    "accessor": "ConfigMap",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/configmaps",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "binaryData": {},
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "config_map",
    "accessor": "ConfigMap",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/configmaps/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "binaryData": {},
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "config_map",
    "accessor": "ConfigMap",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/configmaps/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "binaryData": {},
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "config_map_list",
    "accessor": "ConfigMapList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/configmaps",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "binaryData": {},
          "data": {},
          "immutable": true,
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "config_map_list",
    "accessor": "ConfigMapList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/configmaps",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "binaryData": {},
          "data": {},
          "immutable": true,
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "configmap",
    "accessor": "Configmap",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/configmaps/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "configmap",
    "accessor": "Configmap",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/configmaps",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "configmap",
    "accessor": "Configmap",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/configmaps",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/persistentvolumes",
    "args": [],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "pod_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "service_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/nodes/{name}/proxy",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "path": "v1"
    },
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/nodes/{name}/proxy/{path}",
    "args": [
      {
        "name": "node_id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/persistentvolumes",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "accessModes": [
              "x"
            ],
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "capacity": {},
            "cephfs": {},
            "cinder": {},
            "claimRef": {},
            "csi": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "glusterfs": {},
            "hostPath": {},
            "iscsi": {},
            "local": {},
            "mountOptions": [
              "x"
            ],
            "nfs": {},
            "nodeAffinity": {},
            "persistentVolumeReclaimPolicy": "x",
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "storageClassName": "x",
            "storageos": {},
            "volumeAttributesClassName": "x",
            "volumeMode": "x",
            "vsphereVolume": {}
          },
          "status": {
            "lastPhaseTransitionTime": {},
            "message": "x",
            "phase": "x",
            "reason": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/log",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "container": "v1",
      "follow": "v1",
      "insecure_skip_tls_verify_backend": "v1",
      "limit_byte": "v1",
      "pretty": "v1",
      "previous": "v1",
      "since_second": "v1",
      "stream": "v1",
      "tail_line": "v1",
      "timestamp": "v1"
    },
    "headers": [],
    "query": [
      "container",
      "follow",
      "insecureSkipTLSVerifyBackend",
      "limitBytes",
      "pretty",
      "previous",
      "sinceSeconds",
      "stream",
      "tailLines",
      "timestamps"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/exec",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "command": "v1",
      "container": "v1",
      "stderr": "v1",
      "stdin": "v1",
      "stdout": "v1",
      "tty": "v1"
    },
    "headers": [],
    "query": [
      "command",
      "container",
      "stderr",
      "stdin",
      "stdout",
      "tty"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/attach",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "container": "v1",
      "stderr": "v1",
      "stdin": "v1",
      "stdout": "v1",
      "tty": "v1"
    },
    "headers": [],
    "query": [
      "container",
      "stderr",
      "stdin",
      "stdout",
      "tty"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/portforward",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "port": "v1"
    },
    "headers": [],
    "query": [
      "ports"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "pod_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "service_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/nodes/{name}/proxy",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "path": "v1"
    },
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/nodes/{name}/proxy/{path}",
    "args": [
      {
        "name": "node_id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/persistentvolumes",
    "args": [],
    "select": {
      "continue": "v1",
      "dry_run": "v1",
      "field_selector": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "continue",
      "dryRun",
      "fieldSelector",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "labelSelector",
      "limit",
      "orphanDependents",
      "propagationPolicy",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "code": 1,
      "details": {
        "causes": [
          {
            "field": "x",
            "message": "x",
            "reason": "x"
          }
        ],
        "group": "x",
        "kind": "x",
        "name": "x",
        "retryAfterSeconds": 1,
        "uid": "x"
      },
      "kind": "x",
      "message": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      },
      "reason": "x",
      "status": "x"
    },
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "pod_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "service_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/nodes/{name}/proxy",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "path": "v1"
    },
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/nodes/{name}/proxy/{path}",
    "args": [
      {
        "name": "node_id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/persistentvolumes/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "pod_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      },
      {
        "name": "service_id",
        "wire": "name",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/nodes/{name}/proxy",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "path": "v1"
    },
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "core_v1",
    "accessor": "CoreV1",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/nodes/{name}/proxy/{path}",
    "args": [
      {
        "name": "node_id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "path",
        "wire": "path",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [
      "path"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/endpoints",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "subsets": [
        {
          "addresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "notReadyAddresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "ports": [
            {
              "appProtocol": "x",
              "name": "x",
              "port": 1,
              "protocol": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/endpoints",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "subsets": [
            {
              "addresses": [
                {}
              ],
              "notReadyAddresses": [
                {}
              ],
              "ports": [
                {}
              ]
            }
          ]
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/endpoints",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "subsets": [
            {
              "addresses": [
                {}
              ],
              "notReadyAddresses": [
                {}
              ],
              "ports": [
                {}
              ]
            }
          ]
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/endpoints/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/endpoints",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/endpoints",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/endpoints/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "subsets": [
        {
          "addresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "notReadyAddresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "ports": [
            {
              "appProtocol": "x",
              "name": "x",
              "port": 1,
              "protocol": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/endpoints/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "subsets": [
        {
          "addresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "notReadyAddresses": [
            {
              "hostname": "x",
              "ip": "x",
              "nodeName": "x",
              "targetRef": {}
            }
          ],
          "ports": [
            {
              "appProtocol": "x",
              "name": "x",
              "port": 1,
              "protocol": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/events",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "action": "x",
      "apiVersion": "x",
      "count": 1,
      "eventTime": {},
      "firstTimestamp": {},
      "involvedObject": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "kind": "x",
      "lastTimestamp": {},
      "message": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "reason": "x",
      "related": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "reportingComponent": "x",
      "reportingInstance": "x",
      "series": {
        "count": 1,
        "lastObservedTime": {}
      },
      "source": {
        "component": "x",
        "host": "x"
      },
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/events",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "action": "x",
          "apiVersion": "x",
          "count": 1,
          "eventTime": {},
          "firstTimestamp": {},
          "involvedObject": {
            "apiVersion": "x",
            "fieldPath": "x",
            "kind": "x",
            "name": "x",
            "namespace": "x",
            "resourceVersion": "x",
            "uid": "x"
          },
          "kind": "x",
          "lastTimestamp": {},
          "message": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "reason": "x",
          "related": {
            "apiVersion": "x",
            "fieldPath": "x",
            "kind": "x",
            "name": "x",
            "namespace": "x",
            "resourceVersion": "x",
            "uid": "x"
          },
          "reportingComponent": "x",
          "reportingInstance": "x",
          "series": {
            "count": 1,
            "lastObservedTime": {}
          },
          "source": {
            "component": "x",
            "host": "x"
          },
          "type": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/events",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "action": "x",
          "apiVersion": "x",
          "count": 1,
          "eventTime": {},
          "firstTimestamp": {},
          "involvedObject": {
            "apiVersion": "x",
            "fieldPath": "x",
            "kind": "x",
            "name": "x",
            "namespace": "x",
            "resourceVersion": "x",
            "uid": "x"
          },
          "kind": "x",
          "lastTimestamp": {},
          "message": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "reason": "x",
          "related": {
            "apiVersion": "x",
            "fieldPath": "x",
            "kind": "x",
            "name": "x",
            "namespace": "x",
            "resourceVersion": "x",
            "uid": "x"
          },
          "reportingComponent": "x",
          "reportingInstance": "x",
          "series": {
            "count": 1,
            "lastObservedTime": {}
          },
          "source": {
            "component": "x",
            "host": "x"
          },
          "type": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/events/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/events",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/events",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/events/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "action": "x",
      "apiVersion": "x",
      "count": 1,
      "eventTime": {},
      "firstTimestamp": {},
      "involvedObject": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "kind": "x",
      "lastTimestamp": {},
      "message": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "reason": "x",
      "related": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "reportingComponent": "x",
      "reportingInstance": "x",
      "series": {
        "count": 1,
        "lastObservedTime": {}
      },
      "source": {
        "component": "x",
        "host": "x"
      },
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/events/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "action": "x",
      "apiVersion": "x",
      "count": 1,
      "eventTime": {},
      "firstTimestamp": {},
      "involvedObject": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "kind": "x",
      "lastTimestamp": {},
      "message": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "reason": "x",
      "related": {
        "apiVersion": "x",
        "fieldPath": "x",
        "kind": "x",
        "name": "x",
        "namespace": "x",
        "resourceVersion": "x",
        "uid": "x"
      },
      "reportingComponent": "x",
      "reportingInstance": "x",
      "series": {
        "count": 1,
        "lastObservedTime": {}
      },
      "source": {
        "component": "x",
        "host": "x"
      },
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "eviction",
    "accessor": "Eviction",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/eviction",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "deleteOptions": {
        "apiVersion": "x",
        "dryRun": [
          "x"
        ],
        "gracePeriodSeconds": 1,
        "ignoreStoreReadErrorWithClusterBreakingPotential": true,
        "kind": "x",
        "orphanDependents": true,
        "preconditions": {
          "resourceVersion": "x",
          "uid": "x"
        },
        "propagationPolicy": "x"
      },
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "limit_range",
    "accessor": "LimitRange",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/limitranges",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "limits": [
          {
            "default": {},
            "defaultRequest": {},
            "max": {},
            "maxLimitRequestRatio": {},
            "min": {},
            "type": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "limit_range",
    "accessor": "LimitRange",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/limitranges/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "limits": [
          {
            "default": {},
            "defaultRequest": {},
            "max": {},
            "maxLimitRequestRatio": {},
            "min": {},
            "type": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "limit_range",
    "accessor": "LimitRange",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/limitranges/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "limits": [
          {
            "default": {},
            "defaultRequest": {},
            "max": {},
            "maxLimitRequestRatio": {},
            "min": {},
            "type": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "limit_range_list",
    "accessor": "LimitRangeList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/limitranges",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "limits": [
              {}
            ]
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "limit_range_list",
    "accessor": "LimitRangeList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/limitranges",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "limits": [
              {}
            ]
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "limitrange",
    "accessor": "Limitrange",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/limitranges/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "limitrange",
    "accessor": "Limitrange",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/limitranges",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "limitrange",
    "accessor": "Limitrange",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/limitranges",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces",
    "args": [],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "finalizers": [
              "x"
            ]
          },
          "status": {
            "conditions": [
              {}
            ],
            "phase": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{name}/finalize",
    "action": "finalize",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "namespace",
    "accessor": "Namespace",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "finalizers": [
          "x"
        ]
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/nodes",
    "args": [],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "configSource": {
          "configMap": {}
        },
        "externalID": "x",
        "podCIDR": "x",
        "podCIDRs": [
          "x"
        ],
        "podPreemptionPolicy": {
          "disableResizePreemption": [
            "x"
          ]
        },
        "providerID": "x",
        "taints": [
          {
            "effect": "x",
            "key": "x",
            "timeAdded": {},
            "value": "x"
          }
        ],
        "unschedulable": true
      },
      "status": {
        "addresses": [
          {
            "address": "x",
            "type": "x"
          }
        ],
        "allocatable": {},
        "capacity": {},
        "conditions": [
          {
            "lastHeartbeatTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "config": {
          "active": {},
          "assigned": {},
          "error": "x",
          "lastKnownGood": {}
        },
        "daemonEndpoints": {
          "kubeletEndpoint": {}
        },
        "declaredFeatures": [
          "x"
        ],
        "features": {
          "supplementalGroupsPolicy": true
        },
        "images": [
          {
            "names": [
              "x"
            ],
            "sizeBytes": 1
          }
        ],
        "nodeInfo": {
          "architecture": "x",
          "bootID": "x",
          "containerRuntimeVersion": "x",
          "kernelVersion": "x",
          "kubeProxyVersion": "x",
          "kubeletVersion": "x",
          "machineID": "x",
          "operatingSystem": "x",
          "osImage": "x",
          "runningInUserNamespace": true,
          "swap": {},
          "systemUUID": "x"
        },
        "phase": "x",
        "runtimeHandlers": [
          {
            "features": {},
            "name": "x"
          }
        ],
        "volumesAttached": [
          {
            "devicePath": "x",
            "name": "x"
          }
        ],
        "volumesInUse": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/nodes",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "configSource": {},
            "externalID": "x",
            "podCIDR": "x",
            "podCIDRs": [
              "x"
            ],
            "podPreemptionPolicy": {},
            "providerID": "x",
            "taints": [
              {}
            ],
            "unschedulable": true
          },
          "status": {
            "addresses": [
              {}
            ],
            "allocatable": {},
            "capacity": {},
            "conditions": [
              {}
            ],
            "config": {},
            "daemonEndpoints": {},
            "declaredFeatures": [
              "x"
            ],
            "features": {},
            "images": [
              {}
            ],
            "nodeInfo": {},
            "phase": "x",
            "runtimeHandlers": [
              {}
            ],
            "volumesAttached": [
              {}
            ],
            "volumesInUse": [
              "x"
            ]
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/nodes/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/nodes",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/nodes/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "configSource": {
          "configMap": {}
        },
        "externalID": "x",
        "podCIDR": "x",
        "podCIDRs": [
          "x"
        ],
        "podPreemptionPolicy": {
          "disableResizePreemption": [
            "x"
          ]
        },
        "providerID": "x",
        "taints": [
          {
            "effect": "x",
            "key": "x",
            "timeAdded": {},
            "value": "x"
          }
        ],
        "unschedulable": true
      },
      "status": {
        "addresses": [
          {
            "address": "x",
            "type": "x"
          }
        ],
        "allocatable": {},
        "capacity": {},
        "conditions": [
          {
            "lastHeartbeatTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "config": {
          "active": {},
          "assigned": {},
          "error": "x",
          "lastKnownGood": {}
        },
        "daemonEndpoints": {
          "kubeletEndpoint": {}
        },
        "declaredFeatures": [
          "x"
        ],
        "features": {
          "supplementalGroupsPolicy": true
        },
        "images": [
          {
            "names": [
              "x"
            ],
            "sizeBytes": 1
          }
        ],
        "nodeInfo": {
          "architecture": "x",
          "bootID": "x",
          "containerRuntimeVersion": "x",
          "kernelVersion": "x",
          "kubeProxyVersion": "x",
          "kubeletVersion": "x",
          "machineID": "x",
          "operatingSystem": "x",
          "osImage": "x",
          "runningInUserNamespace": true,
          "swap": {},
          "systemUUID": "x"
        },
        "phase": "x",
        "runtimeHandlers": [
          {
            "features": {},
            "name": "x"
          }
        ],
        "volumesAttached": [
          {
            "devicePath": "x",
            "name": "x"
          }
        ],
        "volumesInUse": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/nodes/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "configSource": {
          "configMap": {}
        },
        "externalID": "x",
        "podCIDR": "x",
        "podCIDRs": [
          "x"
        ],
        "podPreemptionPolicy": {
          "disableResizePreemption": [
            "x"
          ]
        },
        "providerID": "x",
        "taints": [
          {
            "effect": "x",
            "key": "x",
            "timeAdded": {},
            "value": "x"
          }
        ],
        "unschedulable": true
      },
      "status": {
        "addresses": [
          {
            "address": "x",
            "type": "x"
          }
        ],
        "allocatable": {},
        "capacity": {},
        "conditions": [
          {
            "lastHeartbeatTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "config": {
          "active": {},
          "assigned": {},
          "error": "x",
          "lastKnownGood": {}
        },
        "daemonEndpoints": {
          "kubeletEndpoint": {}
        },
        "declaredFeatures": [
          "x"
        ],
        "features": {
          "supplementalGroupsPolicy": true
        },
        "images": [
          {
            "names": [
              "x"
            ],
            "sizeBytes": 1
          }
        ],
        "nodeInfo": {
          "architecture": "x",
          "bootID": "x",
          "containerRuntimeVersion": "x",
          "kernelVersion": "x",
          "kubeProxyVersion": "x",
          "kubeletVersion": "x",
          "machineID": "x",
          "operatingSystem": "x",
          "osImage": "x",
          "runningInUserNamespace": true,
          "swap": {},
          "systemUUID": "x"
        },
        "phase": "x",
        "runtimeHandlers": [
          {
            "features": {},
            "name": "x"
          }
        ],
        "volumesAttached": [
          {
            "devicePath": "x",
            "name": "x"
          }
        ],
        "volumesInUse": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/nodes",
    "args": [],
    "select": {
      "continue": "v1",
      "dry_run": "v1",
      "field_selector": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "continue",
      "dryRun",
      "fieldSelector",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "labelSelector",
      "limit",
      "orphanDependents",
      "propagationPolicy",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "code": 1,
      "details": {
        "causes": [
          {
            "field": "x",
            "message": "x",
            "reason": "x"
          }
        ],
        "group": "x",
        "kind": "x",
        "name": "x",
        "retryAfterSeconds": 1,
        "uid": "x"
      },
      "kind": "x",
      "message": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      },
      "reason": "x",
      "status": "x"
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/nodes/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "configSource": {
          "configMap": {}
        },
        "externalID": "x",
        "podCIDR": "x",
        "podCIDRs": [
          "x"
        ],
        "podPreemptionPolicy": {
          "disableResizePreemption": [
            "x"
          ]
        },
        "providerID": "x",
        "taints": [
          {
            "effect": "x",
            "key": "x",
            "timeAdded": {},
            "value": "x"
          }
        ],
        "unschedulable": true
      },
      "status": {
        "addresses": [
          {
            "address": "x",
            "type": "x"
          }
        ],
        "allocatable": {},
        "capacity": {},
        "conditions": [
          {
            "lastHeartbeatTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "config": {
          "active": {},
          "assigned": {},
          "error": "x",
          "lastKnownGood": {}
        },
        "daemonEndpoints": {
          "kubeletEndpoint": {}
        },
        "declaredFeatures": [
          "x"
        ],
        "features": {
          "supplementalGroupsPolicy": true
        },
        "images": [
          {
            "names": [
              "x"
            ],
            "sizeBytes": 1
          }
        ],
        "nodeInfo": {
          "architecture": "x",
          "bootID": "x",
          "containerRuntimeVersion": "x",
          "kernelVersion": "x",
          "kubeProxyVersion": "x",
          "kubeletVersion": "x",
          "machineID": "x",
          "operatingSystem": "x",
          "osImage": "x",
          "runningInUserNamespace": true,
          "swap": {},
          "systemUUID": "x"
        },
        "phase": "x",
        "runtimeHandlers": [
          {
            "features": {},
            "name": "x"
          }
        ],
        "volumesAttached": [
          {
            "devicePath": "x",
            "name": "x"
          }
        ],
        "volumesInUse": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "node",
    "accessor": "Node",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/nodes/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "configSource": {
          "configMap": {}
        },
        "externalID": "x",
        "podCIDR": "x",
        "podCIDRs": [
          "x"
        ],
        "podPreemptionPolicy": {
          "disableResizePreemption": [
            "x"
          ]
        },
        "providerID": "x",
        "taints": [
          {
            "effect": "x",
            "key": "x",
            "timeAdded": {},
            "value": "x"
          }
        ],
        "unschedulable": true
      },
      "status": {
        "addresses": [
          {
            "address": "x",
            "type": "x"
          }
        ],
        "allocatable": {},
        "capacity": {},
        "conditions": [
          {
            "lastHeartbeatTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "config": {
          "active": {},
          "assigned": {},
          "error": "x",
          "lastKnownGood": {}
        },
        "daemonEndpoints": {
          "kubeletEndpoint": {}
        },
        "declaredFeatures": [
          "x"
        ],
        "features": {
          "supplementalGroupsPolicy": true
        },
        "images": [
          {
            "names": [
              "x"
            ],
            "sizeBytes": 1
          }
        ],
        "nodeInfo": {
          "architecture": "x",
          "bootID": "x",
          "containerRuntimeVersion": "x",
          "kernelVersion": "x",
          "kubeProxyVersion": "x",
          "kubeletVersion": "x",
          "machineID": "x",
          "operatingSystem": "x",
          "osImage": "x",
          "runningInUserNamespace": true,
          "swap": {},
          "systemUUID": "x"
        },
        "phase": "x",
        "runtimeHandlers": [
          {
            "features": {},
            "name": "x"
          }
        ],
        "volumesAttached": [
          {
            "devicePath": "x",
            "name": "x"
          }
        ],
        "volumesInUse": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume",
    "accessor": "PersistentVolume",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/persistentvolumes/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume",
    "accessor": "PersistentVolume",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/persistentvolumes/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume",
    "accessor": "PersistentVolume",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/persistentvolumes/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "force": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "force"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume",
    "accessor": "PersistentVolume",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/persistentvolumes/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim",
    "accessor": "PersistentVolumeClaim",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "dataSource": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x"
        },
        "dataSourceRef": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x"
        },
        "resources": {
          "limits": {},
          "requests": {}
        },
        "selector": {
          "matchExpressions": [
            {}
          ],
          "matchLabels": {}
        },
        "storageClassName": "x",
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "volumeName": "x"
      },
      "status": {
        "accessModes": [
          "x"
        ],
        "allocatedResourceStatuses": {},
        "allocatedResources": {},
        "capacity": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "currentVolumeAttributesClassName": "x",
        "healthStatus": {
          "healthConditions": [
            {}
          ],
          "lastTransitionTime": {}
        },
        "modifyVolumeStatus": {
          "status": "x",
          "targetVolumeAttributesClassName": "x"
        },
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim",
    "accessor": "PersistentVolumeClaim",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "dataSource": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x"
        },
        "dataSourceRef": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x"
        },
        "resources": {
          "limits": {},
          "requests": {}
        },
        "selector": {
          "matchExpressions": [
            {}
          ],
          "matchLabels": {}
        },
        "storageClassName": "x",
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "volumeName": "x"
      },
      "status": {
        "accessModes": [
          "x"
        ],
        "allocatedResourceStatuses": {},
        "allocatedResources": {},
        "capacity": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "currentVolumeAttributesClassName": "x",
        "healthStatus": {
          "healthConditions": [
            {}
          ],
          "lastTransitionTime": {}
        },
        "modifyVolumeStatus": {
          "status": "x",
          "targetVolumeAttributesClassName": "x"
        },
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim",
    "accessor": "PersistentVolumeClaim",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "force": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "force"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "dataSource": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x"
        },
        "dataSourceRef": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x"
        },
        "resources": {
          "limits": {},
          "requests": {}
        },
        "selector": {
          "matchExpressions": [
            {}
          ],
          "matchLabels": {}
        },
        "storageClassName": "x",
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "volumeName": "x"
      },
      "status": {
        "accessModes": [
          "x"
        ],
        "allocatedResourceStatuses": {},
        "allocatedResources": {},
        "capacity": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "currentVolumeAttributesClassName": "x",
        "healthStatus": {
          "healthConditions": [
            {}
          ],
          "lastTransitionTime": {}
        },
        "modifyVolumeStatus": {
          "status": "x",
          "targetVolumeAttributesClassName": "x"
        },
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim",
    "accessor": "PersistentVolumeClaim",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "dataSource": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x"
        },
        "dataSourceRef": {
          "apiGroup": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x"
        },
        "resources": {
          "limits": {},
          "requests": {}
        },
        "selector": {
          "matchExpressions": [
            {}
          ],
          "matchLabels": {}
        },
        "storageClassName": "x",
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "volumeName": "x"
      },
      "status": {
        "accessModes": [
          "x"
        ],
        "allocatedResourceStatuses": {},
        "allocatedResources": {},
        "capacity": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "currentVolumeAttributesClassName": "x",
        "healthStatus": {
          "healthConditions": [
            {}
          ],
          "lastTransitionTime": {}
        },
        "modifyVolumeStatus": {
          "status": "x",
          "targetVolumeAttributesClassName": "x"
        },
        "phase": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim_list",
    "accessor": "PersistentVolumeClaimList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/persistentvolumeclaims",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "accessModes": [
              "x"
            ],
            "dataSource": {},
            "dataSourceRef": {},
            "resources": {},
            "selector": {},
            "storageClassName": "x",
            "volumeAttributesClassName": "x",
            "volumeMode": "x",
            "volumeName": "x"
          },
          "status": {
            "accessModes": [
              "x"
            ],
            "allocatedResourceStatuses": {},
            "allocatedResources": {},
            "capacity": {},
            "conditions": [
              {}
            ],
            "currentVolumeAttributesClassName": "x",
            "healthStatus": {},
            "modifyVolumeStatus": {},
            "phase": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistent_volume_claim_list",
    "accessor": "PersistentVolumeClaimList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/persistentvolumeclaims",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "accessModes": [
              "x"
            ],
            "dataSource": {},
            "dataSourceRef": {},
            "resources": {},
            "selector": {},
            "storageClassName": "x",
            "volumeAttributesClassName": "x",
            "volumeMode": "x",
            "volumeName": "x"
          },
          "status": {
            "accessModes": [
              "x"
            ],
            "allocatedResourceStatuses": {},
            "allocatedResources": {},
            "capacity": {},
            "conditions": [
              {}
            ],
            "currentVolumeAttributesClassName": "x",
            "healthStatus": {},
            "modifyVolumeStatus": {},
            "phase": "x"
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "persistentvolume",
    "accessor": "Persistentvolume",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/persistentvolumes/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "persistentvolume",
    "accessor": "Persistentvolume",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/persistentvolumes",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "persistentvolumeclaim",
    "accessor": "Persistentvolumeclaim",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "persistentvolumeclaim",
    "accessor": "Persistentvolumeclaim",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "persistentvolumeclaim",
    "accessor": "Persistentvolumeclaim",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/persistentvolumeclaims",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/exec",
    "action": "exec",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "command": "v1",
      "container": "v1",
      "stderr": "v1",
      "stdin": "v1",
      "stdout": "v1",
      "tty": "v1"
    },
    "headers": [],
    "query": [
      "command",
      "container",
      "stderr",
      "stdin",
      "stdout",
      "tty"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/attach",
    "action": "attach",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "container": "v1",
      "stderr": "v1",
      "stdin": "v1",
      "stdout": "v1",
      "tty": "v1"
    },
    "headers": [],
    "query": [
      "container",
      "stderr",
      "stdin",
      "stdout",
      "tty"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/portforward",
    "action": "portforward",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "port": "v1"
    },
    "headers": [],
    "query": [
      "ports"
    ],
    "auth": [],
    "status": 200,
    "sample": "x",
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "activeDeadlineSeconds": 1,
            "affinity": {},
            "automountServiceAccountToken": true,
            "containers": [
              {}
            ],
            "dnsConfig": {},
            "dnsPolicy": "x",
            "enableServiceLinks": true,
            "ephemeralContainers": [
              {}
            ],
            "evictionResponders": [
              {}
            ],
            "hostAliases": [
              {}
            ],
            "hostIPC": true,
            "hostNetwork": true,
            "hostPID": true,
            "hostUsers": true,
            "hostname": "x",
            "hostnameOverride": "x",
            "imagePullSecrets": [
              {}
            ],
            "initContainers": [
              {}
            ],
            "nodeName": "x",
            "nodeSelector": {},
            "os": {},
            "overhead": {},
            "preemptionPolicy": "x",
            "priority": 1,
            "priorityClassName": "x",
            "readinessGates": [
              {}
            ],
            "resourceClaims": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "runtimeClassName": "x",
            "schedulerName": "x",
            "schedulingGates": [
              {}
            ],
            "schedulingGroup": {},
            "securityContext": {},
            "serviceAccount": "x",
            "serviceAccountName": "x",
            "setHostnameAsFQDN": true,
            "shareProcessNamespace": true,
            "subdomain": "x",
            "terminationGracePeriodSeconds": 1,
            "tolerations": [
              {}
            ],
            "topologySpreadConstraints": [
              {}
            ],
            "volumes": [
              {}
            ]
          },
          "status": {
            "allocatedResources": {},
            "conditions": [
              {}
            ],
            "containerStatuses": [
              {}
            ],
            "ephemeralContainerStatuses": [
              {}
            ],
            "extendedResourceClaimStatus": {},
            "hostIP": "x",
            "hostIPs": [
              {}
            ],
            "initContainerStatuses": [
              {}
            ],
            "message": "x",
            "nodeAllocatableResourceClaimStatuses": [
              {}
            ],
            "nominatedNodeName": "x",
            "observedGeneration": 1,
            "phase": "x",
            "podIP": "x",
            "podIPs": [
              {}
            ],
            "qosClass": "x",
            "reason": "x",
            "resize": "x",
            "resourceClaimStatuses": [
              {}
            ],
            "resources": {},
            "startTime": {},
            "volumeHealth": [
              {}
            ]
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/pods",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "activeDeadlineSeconds": 1,
            "affinity": {},
            "automountServiceAccountToken": true,
            "containers": [
              {}
            ],
            "dnsConfig": {},
            "dnsPolicy": "x",
            "enableServiceLinks": true,
            "ephemeralContainers": [
              {}
            ],
            "evictionResponders": [
              {}
            ],
            "hostAliases": [
              {}
            ],
            "hostIPC": true,
            "hostNetwork": true,
            "hostPID": true,
            "hostUsers": true,
            "hostname": "x",
            "hostnameOverride": "x",
            "imagePullSecrets": [
              {}
            ],
            "initContainers": [
              {}
            ],
            "nodeName": "x",
            "nodeSelector": {},
            "os": {},
            "overhead": {},
            "preemptionPolicy": "x",
            "priority": 1,
            "priorityClassName": "x",
            "readinessGates": [
              {}
            ],
            "resourceClaims": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "runtimeClassName": "x",
            "schedulerName": "x",
            "schedulingGates": [
              {}
            ],
            "schedulingGroup": {},
            "securityContext": {},
            "serviceAccount": "x",
            "serviceAccountName": "x",
            "setHostnameAsFQDN": true,
            "shareProcessNamespace": true,
            "subdomain": "x",
            "terminationGracePeriodSeconds": 1,
            "tolerations": [
              {}
            ],
            "topologySpreadConstraints": [
              {}
            ],
            "volumes": [
              {}
            ]
          },
          "status": {
            "allocatedResources": {},
            "conditions": [
              {}
            ],
            "containerStatuses": [
              {}
            ],
            "ephemeralContainerStatuses": [
              {}
            ],
            "extendedResourceClaimStatus": {},
            "hostIP": "x",
            "hostIPs": [
              {}
            ],
            "initContainerStatuses": [
              {}
            ],
            "message": "x",
            "nodeAllocatableResourceClaimStatuses": [
              {}
            ],
            "nominatedNodeName": "x",
            "observedGeneration": 1,
            "phase": "x",
            "podIP": "x",
            "podIPs": [
              {}
            ],
            "qosClass": "x",
            "reason": "x",
            "resize": "x",
            "resourceClaimStatuses": [
              {}
            ],
            "resources": {},
            "startTime": {},
            "volumeHealth": [
              {}
            ]
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/pods/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/pods",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/pods",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers",
    "action": "ephemeralcontainer",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/resize",
    "action": "resize",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers",
    "action": "ephemeralcontainer",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/resize",
    "action": "resize",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod",
    "accessor": "Pod",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/pods/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "activeDeadlineSeconds": 1,
        "affinity": {
          "nodeAffinity": {},
          "podAffinity": {},
          "podAntiAffinity": {}
        },
        "automountServiceAccountToken": true,
        "containers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "dnsConfig": {
          "nameservers": [
            "x"
          ],
          "options": [
            {}
          ],
          "searches": [
            "x"
          ]
        },
        "dnsPolicy": "x",
        "enableServiceLinks": true,
        "ephemeralContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "targetContainerName": "x",
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "evictionResponders": [
          {
            "name": "x",
            "priority": 1
          }
        ],
        "hostAliases": [
          {
            "hostnames": [
              "x"
            ],
            "ip": "x"
          }
        ],
        "hostIPC": true,
        "hostNetwork": true,
        "hostPID": true,
        "hostUsers": true,
        "hostname": "x",
        "hostnameOverride": "x",
        "imagePullSecrets": [
          {
            "name": "x"
          }
        ],
        "initContainers": [
          {
            "args": [
              "x"
            ],
            "command": [
              "x"
            ],
            "env": [
              {}
            ],
            "envFrom": [
              {}
            ],
            "image": "x",
            "imagePullPolicy": "x",
            "lifecycle": {},
            "livenessProbe": {},
            "name": "x",
            "ports": [
              {}
            ],
            "readinessProbe": {},
            "resizePolicy": [
              {}
            ],
            "resources": {},
            "restartPolicy": "x",
            "restartPolicyRules": [
              {}
            ],
            "securityContext": {},
            "startupProbe": {},
            "stdin": true,
            "stdinOnce": true,
            "terminationMessagePath": "x",
            "terminationMessagePolicy": "x",
            "tty": true,
            "volumeDevices": [
              {}
            ],
            "volumeMounts": [
              {}
            ],
            "workingDir": "x"
          }
        ],
        "nodeName": "x",
        "nodeSelector": {},
        "os": {
          "name": "x"
        },
        "overhead": {},
        "preemptionPolicy": "x",
        "priority": 1,
        "priorityClassName": "x",
        "readinessGates": [
          {
            "conditionType": "x"
          }
        ],
        "resourceClaims": [
          {
            "name": "x",
            "resourceClaimName": "x",
            "resourceClaimTemplateName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "restartPolicy": "x",
        "runtimeClassName": "x",
        "schedulerName": "x",
        "schedulingGates": [
          {
            "name": "x"
          }
        ],
        "schedulingGroup": {
          "podGroupName": "x"
        },
        "securityContext": {
          "appArmorProfile": {},
          "fsGroup": 1,
          "fsGroupChangePolicy": "x",
          "runAsGroup": 1,
          "runAsNonRoot": true,
          "runAsUser": 1,
          "seLinuxChangePolicy": "x",
          "seLinuxOptions": {},
          "seccompProfile": {},
          "supplementalGroups": [
            1
          ],
          "supplementalGroupsPolicy": "x",
          "sysctls": [
            {}
          ],
          "windowsOptions": {}
        },
        "serviceAccount": "x",
        "serviceAccountName": "x",
        "setHostnameAsFQDN": true,
        "shareProcessNamespace": true,
        "subdomain": "x",
        "terminationGracePeriodSeconds": 1,
        "tolerations": [
          {
            "effect": "x",
            "key": "x",
            "operator": "x",
            "tolerationSeconds": 1,
            "value": "x"
          }
        ],
        "topologySpreadConstraints": [
          {
            "labelSelector": {},
            "matchLabelKeys": [
              "x"
            ],
            "maxSkew": 1,
            "minDomains": 1,
            "nodeAffinityPolicy": "x",
            "nodeTaintsPolicy": "x",
            "topologyKey": "x",
            "whenUnsatisfiable": "x"
          }
        ],
        "volumes": [
          {
            "awsElasticBlockStore": {},
            "azureDisk": {},
            "azureFile": {},
            "cephfs": {},
            "cinder": {},
            "configMap": {},
            "csi": {},
            "downwardAPI": {},
            "emptyDir": {},
            "ephemeral": {},
            "fc": {},
            "flexVolume": {},
            "flocker": {},
            "gcePersistentDisk": {},
            "gitRepo": {},
            "glusterfs": {},
            "hostPath": {},
            "image": {},
            "iscsi": {},
            "name": "x",
            "nfs": {},
            "persistentVolumeClaim": {},
            "photonPersistentDisk": {},
            "portworxVolume": {},
            "projected": {},
            "quobyte": {},
            "rbd": {},
            "scaleIO": {},
            "secret": {},
            "storageos": {},
            "vsphereVolume": {}
          }
        ]
      },
      "status": {
        "allocatedResources": {},
        "conditions": [
          {
            "lastProbeTime": {},
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "containerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "ephemeralContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "extendedResourceClaimStatus": {
          "requestMappings": [
            {}
          ],
          "resourceClaimName": "x"
        },
        "hostIP": "x",
        "hostIPs": [
          {
            "ip": "x"
          }
        ],
        "initContainerStatuses": [
          {
            "allocatedResources": {},
            "allocatedResourcesStatus": [
              {}
            ],
            "containerID": "x",
            "image": "x",
            "imageID": "x",
            "lastState": {},
            "name": "x",
            "ready": true,
            "resources": {},
            "restartCount": 1,
            "started": true,
            "state": {},
            "stopSignal": "x",
            "user": {},
            "volumeMounts": [
              {}
            ]
          }
        ],
        "message": "x",
        "nodeAllocatableResourceClaimStatuses": [
          {
            "containers": [
              "x"
            ],
            "mapping": [
              {}
            ],
            "overhead": [
              {}
            ],
            "resourceClaimName": "x"
          }
        ],
        "nominatedNodeName": "x",
        "observedGeneration": 1,
        "phase": "x",
        "podIP": "x",
        "podIPs": [
          {
            "ip": "x"
          }
        ],
        "qosClass": "x",
        "reason": "x",
        "resize": "x",
        "resourceClaimStatuses": [
          {
            "name": "x",
            "resourceClaimName": "x"
          }
        ],
        "resources": {
          "claims": [
            {}
          ],
          "limits": {},
          "requests": {}
        },
        "startTime": {},
        "volumeHealth": [
          {
            "healthConditions": [
              {}
            ],
            "lastTransitionTime": {},
            "name": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod_template",
    "accessor": "PodTemplate",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "template": {
        "metadata": {
          "annotations": {},
          "creationTimestamp": {},
          "deletionGracePeriodSeconds": 1,
          "deletionTimestamp": {},
          "finalizers": [
            "x"
          ],
          "generateName": "x",
          "generation": 1,
          "labels": {},
          "managedFields": [
            {}
          ],
          "name": "x",
          "namespace": "x",
          "ownerReferences": [
            {}
          ],
          "resourceVersion": "x",
          "selfLink": "x",
          "uid": "x"
        },
        "spec": {
          "activeDeadlineSeconds": 1,
          "affinity": {},
          "automountServiceAccountToken": true,
          "containers": [
            {}
          ],
          "dnsConfig": {},
          "dnsPolicy": "x",
          "enableServiceLinks": true,
          "ephemeralContainers": [
            {}
          ],
          "evictionResponders": [
            {}
          ],
          "hostAliases": [
            {}
          ],
          "hostIPC": true,
          "hostNetwork": true,
          "hostPID": true,
          "hostUsers": true,
          "hostname": "x",
          "hostnameOverride": "x",
          "imagePullSecrets": [
            {}
          ],
          "initContainers": [
            {}
          ],
          "nodeName": "x",
          "nodeSelector": {},
          "os": {},
          "overhead": {},
          "preemptionPolicy": "x",
          "priority": 1,
          "priorityClassName": "x",
          "readinessGates": [
            {}
          ],
          "resourceClaims": [
            {}
          ],
          "resources": {},
          "restartPolicy": "x",
          "runtimeClassName": "x",
          "schedulerName": "x",
          "schedulingGates": [
            {}
          ],
          "schedulingGroup": {},
          "securityContext": {},
          "serviceAccount": "x",
          "serviceAccountName": "x",
          "setHostnameAsFQDN": true,
          "shareProcessNamespace": true,
          "subdomain": "x",
          "terminationGracePeriodSeconds": 1,
          "tolerations": [
            {}
          ],
          "topologySpreadConstraints": [
            {}
          ],
          "volumes": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod_template",
    "accessor": "PodTemplate",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/podtemplates/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "template": {
        "metadata": {
          "annotations": {},
          "creationTimestamp": {},
          "deletionGracePeriodSeconds": 1,
          "deletionTimestamp": {},
          "finalizers": [
            "x"
          ],
          "generateName": "x",
          "generation": 1,
          "labels": {},
          "managedFields": [
            {}
          ],
          "name": "x",
          "namespace": "x",
          "ownerReferences": [
            {}
          ],
          "resourceVersion": "x",
          "selfLink": "x",
          "uid": "x"
        },
        "spec": {
          "activeDeadlineSeconds": 1,
          "affinity": {},
          "automountServiceAccountToken": true,
          "containers": [
            {}
          ],
          "dnsConfig": {},
          "dnsPolicy": "x",
          "enableServiceLinks": true,
          "ephemeralContainers": [
            {}
          ],
          "evictionResponders": [
            {}
          ],
          "hostAliases": [
            {}
          ],
          "hostIPC": true,
          "hostNetwork": true,
          "hostPID": true,
          "hostUsers": true,
          "hostname": "x",
          "hostnameOverride": "x",
          "imagePullSecrets": [
            {}
          ],
          "initContainers": [
            {}
          ],
          "nodeName": "x",
          "nodeSelector": {},
          "os": {},
          "overhead": {},
          "preemptionPolicy": "x",
          "priority": 1,
          "priorityClassName": "x",
          "readinessGates": [
            {}
          ],
          "resourceClaims": [
            {}
          ],
          "resources": {},
          "restartPolicy": "x",
          "runtimeClassName": "x",
          "schedulerName": "x",
          "schedulingGates": [
            {}
          ],
          "schedulingGroup": {},
          "securityContext": {},
          "serviceAccount": "x",
          "serviceAccountName": "x",
          "setHostnameAsFQDN": true,
          "shareProcessNamespace": true,
          "subdomain": "x",
          "terminationGracePeriodSeconds": 1,
          "tolerations": [
            {}
          ],
          "topologySpreadConstraints": [
            {}
          ],
          "volumes": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod_template_list",
    "accessor": "PodTemplateList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/podtemplates",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "template": {
            "metadata": {},
            "spec": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "pod_template_list",
    "accessor": "PodTemplateList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/podtemplates",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "template": {
            "metadata": {},
            "spec": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "podtemplate",
    "accessor": "Podtemplate",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/podtemplates/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "podtemplate",
    "accessor": "Podtemplate",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/podtemplates",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "podtemplate",
    "accessor": "Podtemplate",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/podtemplates",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "replication_controller_list",
    "accessor": "ReplicationControllerList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "minReadySeconds": 1,
            "replicas": 1,
            "selector": {},
            "template": {}
          },
          "status": {
            "availableReplicas": 1,
            "conditions": [
              {}
            ],
            "fullyLabeledReplicas": 1,
            "observedGeneration": 1,
            "readyReplicas": 1,
            "replicas": 1
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "replication_controller_list",
    "accessor": "ReplicationControllerList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/replicationcontrollers",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "minReadySeconds": 1,
            "replicas": 1,
            "selector": {},
            "template": {}
          },
          "status": {
            "availableReplicas": 1,
            "conditions": [
              {}
            ],
            "fullyLabeledReplicas": 1,
            "observedGeneration": 1,
            "readyReplicas": 1,
            "replicas": 1
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/replicationcontrollers",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/replicationcontrollers",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "minReadySeconds": 1,
        "replicas": 1,
        "selector": {},
        "template": {
          "metadata": {},
          "spec": {}
        }
      },
      "status": {
        "availableReplicas": 1,
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "fullyLabeledReplicas": 1,
        "observedGeneration": 1,
        "readyReplicas": 1,
        "replicas": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "force": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "force"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "minReadySeconds": 1,
        "replicas": 1,
        "selector": {},
        "template": {
          "metadata": {},
          "spec": {}
        }
      },
      "status": {
        "availableReplicas": 1,
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "fullyLabeledReplicas": 1,
        "observedGeneration": 1,
        "readyReplicas": 1,
        "replicas": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "replicationcontroller",
    "accessor": "Replicationcontroller",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "minReadySeconds": 1,
        "replicas": 1,
        "selector": {},
        "template": {
          "metadata": {},
          "spec": {}
        }
      },
      "status": {
        "availableReplicas": 1,
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "fullyLabeledReplicas": 1,
        "observedGeneration": 1,
        "readyReplicas": 1,
        "replicas": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota",
    "accessor": "ResourceQuota",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "hard": {},
        "scopeSelector": {
          "matchExpressions": [
            {}
          ]
        },
        "scopes": [
          "x"
        ]
      },
      "status": {
        "hard": {},
        "used": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota",
    "accessor": "ResourceQuota",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/resourcequotas/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "hard": {},
        "scopeSelector": {
          "matchExpressions": [
            {}
          ]
        },
        "scopes": [
          "x"
        ]
      },
      "status": {
        "hard": {},
        "used": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota",
    "accessor": "ResourceQuota",
    "op": "update",
    "method": "PATCH",
    "path": "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "force": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "force"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "hard": {},
        "scopeSelector": {
          "matchExpressions": [
            {}
          ]
        },
        "scopes": [
          "x"
        ]
      },
      "status": {
        "hard": {},
        "used": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota",
    "accessor": "ResourceQuota",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "hard": {},
        "scopeSelector": {
          "matchExpressions": [
            {}
          ]
        },
        "scopes": [
          "x"
        ]
      },
      "status": {
        "hard": {},
        "used": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota_list",
    "accessor": "ResourceQuotaList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/resourcequotas",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "hard": {},
            "scopeSelector": {},
            "scopes": [
              "x"
            ]
          },
          "status": {
            "hard": {},
            "used": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "resource_quota_list",
    "accessor": "ResourceQuotaList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/resourcequotas",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "hard": {},
            "scopeSelector": {},
            "scopes": [
              "x"
            ]
          },
          "status": {
            "hard": {},
            "used": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "resourcequota",
    "accessor": "Resourcequota",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "resourcequota",
    "accessor": "Resourcequota",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/resourcequotas",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "resourcequota",
    "accessor": "Resourcequota",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/resourcequotas",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "scale",
    "accessor": "Scale",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "replicas": 1
      },
      "status": {
        "replicas": 1,
        "selector": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "scale",
    "accessor": "Scale",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "replicas": 1
      },
      "status": {
        "replicas": 1,
        "selector": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/secrets",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "stringData": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/secrets",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "data": {},
          "immutable": true,
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "stringData": {},
          "type": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/secrets",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "data": {},
          "immutable": true,
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "stringData": {},
          "type": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/secrets/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/secrets",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/secrets",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/secrets/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "stringData": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/secrets/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "data": {},
      "immutable": true,
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "stringData": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/services",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/services",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "allocateLoadBalancerNodePorts": true,
            "clusterIP": "x",
            "clusterIPs": [
              "x"
            ],
            "externalIPs": [
              "x"
            ],
            "externalName": "x",
            "externalTrafficPolicy": "x",
            "healthCheckNodePort": 1,
            "internalTrafficPolicy": "x",
            "ipFamilies": [
              "x"
            ],
            "ipFamilyPolicy": "x",
            "loadBalancerClass": "x",
            "loadBalancerIP": "x",
            "loadBalancerSourceRanges": [
              "x"
            ],
            "ports": [
              {}
            ],
            "publishNotReadyAddresses": true,
            "selector": {},
            "sessionAffinity": "x",
            "sessionAffinityConfig": {},
            "trafficDistribution": "x",
            "type": "x"
          },
          "status": {
            "conditions": [
              {}
            ],
            "loadBalancer": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/services",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "spec": {
            "allocateLoadBalancerNodePorts": true,
            "clusterIP": "x",
            "clusterIPs": [
              "x"
            ],
            "externalIPs": [
              "x"
            ],
            "externalName": "x",
            "externalTrafficPolicy": "x",
            "healthCheckNodePort": 1,
            "internalTrafficPolicy": "x",
            "ipFamilies": [
              "x"
            ],
            "ipFamilyPolicy": "x",
            "loadBalancerClass": "x",
            "loadBalancerIP": "x",
            "loadBalancerSourceRanges": [
              "x"
            ],
            "ports": [
              {}
            ],
            "publishNotReadyAddresses": true,
            "selector": {},
            "sessionAffinity": "x",
            "sessionAffinityConfig": {},
            "trafficDistribution": "x",
            "type": "x"
          },
          "status": {
            "conditions": [
              {}
            ],
            "loadBalancer": {}
          }
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/services/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/services",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/services",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/services/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/services/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/services/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service",
    "accessor": "Service",
    "op": "update",
    "method": "PUT",
    "path": "/api/v1/namespaces/{namespace}/services/{name}/status",
    "action": "status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "fieldManager",
      "fieldValidation"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "allocateLoadBalancerNodePorts": true,
        "clusterIP": "x",
        "clusterIPs": [
          "x"
        ],
        "externalIPs": [
          "x"
        ],
        "externalName": "x",
        "externalTrafficPolicy": "x",
        "healthCheckNodePort": 1,
        "internalTrafficPolicy": "x",
        "ipFamilies": [
          "x"
        ],
        "ipFamilyPolicy": "x",
        "loadBalancerClass": "x",
        "loadBalancerIP": "x",
        "loadBalancerSourceRanges": [
          "x"
        ],
        "ports": [
          {
            "appProtocol": "x",
            "name": "x",
            "nodePort": 1,
            "port": 1,
            "protocol": "x",
            "targetPort": {}
          }
        ],
        "publishNotReadyAddresses": true,
        "selector": {},
        "sessionAffinity": "x",
        "sessionAffinityConfig": {
          "clientIP": {}
        },
        "trafficDistribution": "x",
        "type": "x"
      },
      "status": {
        "conditions": [
          {
            "lastTransitionTime": {},
            "message": "x",
            "observedGeneration": 1,
            "reason": "x",
            "status": "x",
            "type": "x"
          }
        ],
        "loadBalancer": {
          "ingress": [
            {}
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service_account",
    "accessor": "ServiceAccount",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "automountServiceAccountToken": true,
      "imagePullSecrets": [
        {
          "name": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "secrets": [
        {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "service_account",
    "accessor": "ServiceAccount",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/v1/namespaces/{namespace}/serviceaccounts/{name}",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "grace_period_second": "v1",
      "ignore_store_read_error_with_cluster_breaking_potential": "v1",
      "orphan_dependent": "v1",
      "pretty": "v1",
      "propagation_policy": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "dryRun",
      "gracePeriodSeconds",
      "ignoreStoreReadErrorWithClusterBreakingPotential",
      "orphanDependents",
      "propagationPolicy"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "automountServiceAccountToken": true,
      "imagePullSecrets": [
        {
          "name": "x"
        }
      ],
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "secrets": [
        {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "service_account_list",
    "accessor": "ServiceAccountList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/namespaces/{namespace}/serviceaccounts",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "pretty",
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "automountServiceAccountToken": true,
          "imagePullSecrets": [
            {
              "name": "x"
            }
          ],
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "secrets": [
            {
              "apiVersion": "x",
              "fieldPath": "x",
              "kind": "x",
              "name": "x",
              "namespace": "x",
              "resourceVersion": "x",
              "uid": "x"
            }
          ]
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "service_account_list",
    "accessor": "ServiceAccountList",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/serviceaccounts",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "items": [
        {
          "apiVersion": "x",
          "automountServiceAccountToken": true,
          "imagePullSecrets": [
            {
              "name": "x"
            }
          ],
          "kind": "x",
          "metadata": {
            "annotations": {},
            "creationTimestamp": {},
            "deletionGracePeriodSeconds": 1,
            "deletionTimestamp": {},
            "finalizers": [
              "x"
            ],
            "generateName": "x",
            "generation": 1,
            "labels": {},
            "managedFields": [
              {}
            ],
            "name": "x",
            "namespace": "x",
            "ownerReferences": [
              {}
            ],
            "resourceVersion": "x",
            "selfLink": "x",
            "uid": "x"
          },
          "secrets": [
            {
              "apiVersion": "x",
              "fieldPath": "x",
              "kind": "x",
              "name": "x",
              "namespace": "x",
              "resourceVersion": "x",
              "uid": "x"
            }
          ]
        }
      ],
      "kind": "x",
      "metadata": {
        "continue": "x",
        "remainingItemCount": 1,
        "resourceVersion": "x",
        "selfLink": "x",
        "shardInfo": {
          "selector": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "serviceaccount",
    "accessor": "Serviceaccount",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}",
    "args": [
      {
        "name": "id",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "serviceaccount",
    "accessor": "Serviceaccount",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/namespaces/{namespace}/serviceaccounts",
    "args": [
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p1"
      }
    ],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "serviceaccount",
    "accessor": "Serviceaccount",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/watch/serviceaccounts",
    "args": [],
    "select": {
      "allow_watch_bookmark": "v1",
      "continue": "v1",
      "field_selector": "v1",
      "label_selector": "v1",
      "limit": "v1",
      "pretty": "v1",
      "resource_version": "v1",
      "resource_version_match": "v1",
      "send_initial_event": "v1",
      "shard_selector": "v1",
      "timeout_second": "v1",
      "watch": "v1"
    },
    "headers": [],
    "query": [
      "allowWatchBookmarks",
      "continue",
      "fieldSelector",
      "labelSelector",
      "limit",
      "pretty",
      "resourceVersion",
      "resourceVersionMatch",
      "sendInitialEvents",
      "shardSelector",
      "timeoutSeconds",
      "watch"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "object": {},
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "status",
    "accessor": "Status",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/persistentvolumes/{name}/status",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      }
    ],
    "select": {
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "accessModes": [
          "x"
        ],
        "awsElasticBlockStore": {
          "fsType": "x",
          "partition": 1,
          "readOnly": true,
          "volumeID": "x"
        },
        "azureDisk": {
          "cachingMode": "x",
          "diskName": "x",
          "diskURI": "x",
          "fsType": "x",
          "kind": "x",
          "readOnly": true
        },
        "azureFile": {
          "readOnly": true,
          "secretName": "x",
          "secretNamespace": "x",
          "shareName": "x"
        },
        "capacity": {},
        "cephfs": {
          "monitors": [
            "x"
          ],
          "path": "x",
          "readOnly": true,
          "secretFile": "x",
          "secretRef": {},
          "user": "x"
        },
        "cinder": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeID": "x"
        },
        "claimRef": {
          "apiVersion": "x",
          "fieldPath": "x",
          "kind": "x",
          "name": "x",
          "namespace": "x",
          "resourceVersion": "x",
          "uid": "x"
        },
        "csi": {
          "controllerExpandSecretRef": {},
          "controllerPublishSecretRef": {},
          "driver": "x",
          "fsType": "x",
          "nodeExpandSecretRef": {},
          "nodePublishSecretRef": {},
          "nodeStageSecretRef": {},
          "readOnly": true,
          "volumeAttributes": {},
          "volumeHandle": "x"
        },
        "fc": {
          "fsType": "x",
          "lun": 1,
          "readOnly": true,
          "targetWWNs": [
            "x"
          ],
          "wwids": [
            "x"
          ]
        },
        "flexVolume": {
          "driver": "x",
          "fsType": "x",
          "options": {},
          "readOnly": true,
          "secretRef": {}
        },
        "flocker": {
          "datasetName": "x",
          "datasetUUID": "x"
        },
        "gcePersistentDisk": {
          "fsType": "x",
          "partition": 1,
          "pdName": "x",
          "readOnly": true
        },
        "glusterfs": {
          "endpoints": "x",
          "endpointsNamespace": "x",
          "path": "x",
          "readOnly": true
        },
        "hostPath": {
          "path": "x",
          "type": "x"
        },
        "iscsi": {
          "chapAuthDiscovery": true,
          "chapAuthSession": true,
          "fsType": "x",
          "initiatorName": "x",
          "iqn": "x",
          "iscsiInterface": "x",
          "lun": 1,
          "portals": [
            "x"
          ],
          "readOnly": true,
          "secretRef": {},
          "targetPortal": "x"
        },
        "local": {
          "fsType": "x",
          "path": "x"
        },
        "mountOptions": [
          "x"
        ],
        "nfs": {
          "path": "x",
          "readOnly": true,
          "server": "x"
        },
        "nodeAffinity": {
          "required": {}
        },
        "persistentVolumeReclaimPolicy": "x",
        "photonPersistentDisk": {
          "fsType": "x",
          "pdID": "x"
        },
        "portworxVolume": {
          "fsType": "x",
          "readOnly": true,
          "volumeID": "x"
        },
        "quobyte": {
          "group": "x",
          "readOnly": true,
          "registry": "x",
          "tenant": "x",
          "user": "x",
          "volume": "x"
        },
        "rbd": {
          "fsType": "x",
          "image": "x",
          "keyring": "x",
          "monitors": [
            "x"
          ],
          "pool": "x",
          "readOnly": true,
          "secretRef": {},
          "user": "x"
        },
        "scaleIO": {
          "fsType": "x",
          "gateway": "x",
          "protectionDomain": "x",
          "readOnly": true,
          "secretRef": {},
          "sslEnabled": true,
          "storageMode": "x",
          "storagePool": "x",
          "system": "x",
          "volumeName": "x"
        },
        "storageClassName": "x",
        "storageos": {
          "fsType": "x",
          "readOnly": true,
          "secretRef": {},
          "volumeName": "x",
          "volumeNamespace": "x"
        },
        "volumeAttributesClassName": "x",
        "volumeMode": "x",
        "vsphereVolume": {
          "fsType": "x",
          "storagePolicyID": "x",
          "storagePolicyName": "x",
          "volumePath": "x"
        }
      },
      "status": {
        "lastPhaseTransitionTime": {},
        "message": "x",
        "phase": "x",
        "reason": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "token",
    "accessor": "Token",
    "op": "create",
    "method": "POST",
    "path": "/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token",
    "args": [
      {
        "name": "name",
        "wire": "name",
        "value": "p1"
      },
      {
        "name": "namespace_id",
        "wire": "namespace",
        "value": "p2"
      }
    ],
    "select": {
      "dry_run": "v1",
      "field_manager": "v1",
      "field_validation": "v1",
      "pretty": "v1"
    },
    "headers": [],
    "query": [
      "dryRun",
      "fieldManager",
      "fieldValidation",
      "pretty"
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "apiVersion": "x",
      "kind": "x",
      "metadata": {
        "annotations": {},
        "creationTimestamp": {},
        "deletionGracePeriodSeconds": 1,
        "deletionTimestamp": {},
        "finalizers": [
          "x"
        ],
        "generateName": "x",
        "generation": 1,
        "labels": {},
        "managedFields": [
          {
            "apiVersion": "x",
            "fieldsType": "x",
            "fieldsV1": {},
            "manager": "x",
            "operation": "x",
            "subresource": "x",
            "time": {}
          }
        ],
        "name": "x",
        "namespace": "x",
        "ownerReferences": [
          {
            "apiVersion": "x",
            "blockOwnerDeletion": true,
            "controller": true,
            "kind": "x",
            "name": "x",
            "uid": "x"
          }
        ],
        "resourceVersion": "x",
        "selfLink": "x",
        "uid": "x"
      },
      "spec": {
        "attestations": {},
        "audiences": [
          "x"
        ],
        "boundObjectRef": {
          "apiVersion": "x",
          "kind": "x",
          "name": "x",
          "uid": "x"
        },
        "expirationSeconds": 1
      },
      "status": {
        "expirationTimestamp": {},
        "token": "x"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
