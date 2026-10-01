# Twillio TypeScript SDK Reference

Complete API reference for the Twillio TypeScript SDK.


## TwillioSDK

### Constructor

```ts
new TwillioSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.secret` | `string` | API secret for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TwillioSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TwillioSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TwillioSDK` instance in test mode.


### Instance Methods

#### `AccountsV1Aw(data?: object)`

Create a new `AccountsV1Aw` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountsV1AwEntity` instance.

#### `AccountsV1PublicKey(data?: object)`

Create a new `AccountsV1PublicKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountsV1PublicKeyEntity` instance.

#### `AccountsV1Safelist(data?: object)`

Create a new `AccountsV1Safelist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountsV1SafelistEntity` instance.

#### `AccountsV1SecondaryAuthToken(data?: object)`

Create a new `AccountsV1SecondaryAuthToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountsV1SecondaryAuthTokenEntity` instance.

#### `AuthTokenPromotion(data?: object)`

Create a new `AuthTokenPromotion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthTokenPromotionEntity` instance.

#### `Bulk(data?: object)`

Create a new `Bulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkEntity` instance.

#### `CredentialAw(data?: object)`

Create a new `CredentialAw` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CredentialAwEntity` instance.

#### `CredentialPublicKey(data?: object)`

Create a new `CredentialPublicKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CredentialPublicKeyEntity` instance.

#### `MessagingGeopermission(data?: object)`

Create a new `MessagingGeopermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessagingGeopermissionEntity` instance.

#### `Safelist(data?: object)`

Create a new `Safelist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SafelistEntity` instance.

#### `Secondary(data?: object)`

Create a new `Secondary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecondaryEntity` instance.

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

Alias for `TwillioSDK.test()`.

**Returns:** `TwillioSDK` instance in test mode.


---

## AccountsV1AwEntity

```ts
const accounts_v1_aw = client.AccountsV1Aw()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | `string` | No | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | No | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | No | The string that you assigned to describe the resource. |
| `sid` | `string` | No | The unique string that we created to identify the AWS resource. |
| `url` | `string` | No | The URI for this resource, relative to `https://accounts.twilio.com` |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountsV1Aw().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountsV1Aw().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountsV1Aw().remove({ sid: 'sid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountsV1AwEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountsV1PublicKeyEntity

```ts
const accounts_v1_public_key = client.AccountsV1PublicKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | `string` | No | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | No | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | No | The string that you assigned to describe the resource. |
| `id` | `string` | No |  |
| `sid` | `string` | No | The unique string that that we created to identify the PublicKey resource. |
| `url` | `string` | No | The URI for this resource, relative to `https://accounts.twilio.com` |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountsV1PublicKey().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountsV1PublicKey().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountsV1PublicKey().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountsV1PublicKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountsV1SafelistEntity

```ts
const accounts_v1_safelist = client.AccountsV1Safelist()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountsV1Safelist().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountsV1SafelistEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountsV1SecondaryAuthTokenEntity

```ts
const accounts_v1_secondary_auth_token = client.AccountsV1SecondaryAuthToken()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountsV1SecondaryAuthToken().remove()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountsV1SecondaryAuthTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthTokenPromotionEntity

```ts
const auth_token_promotion = client.AuthTokenPromotion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for. |
| `auth_token` | `string` | No | The promoted Auth Token that must be used to authenticate future API requests. |
| `date_created` | `string` | No | The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `date_updated` | `string` | No | The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `url` | `string` | No | The URI for this resource, relative to `https://accounts.twilio.com` |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AuthTokenPromotion().create({
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

Create a new `AuthTokenPromotionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkEntity

```ts
const bulk = client.Bulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Bulk().create({
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

Create a new `BulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CredentialAwEntity

```ts
const credential_aw = client.CredentialAw()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | `string` | No | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | No | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | No | The string that you assigned to describe the resource. |
| `sid` | `string` | No | The unique string that we created to identify the AWS resource. |
| `url` | `string` | No | The URI for this resource, relative to `https://accounts.twilio.com` |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CredentialAw().create({
  sid: 'example_sid',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CredentialAw().load({ sid: 'sid' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CredentialAwEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CredentialPublicKeyEntity

```ts
const credential_public_key = client.CredentialPublicKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | `string` | No | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | No | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | No | The string that you assigned to describe the resource. |
| `id` | `string` | No |  |
| `sid` | `string` | No | The unique string that that we created to identify the PublicKey resource. |
| `url` | `string` | No | The URI for this resource, relative to `https://accounts.twilio.com` |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CredentialPublicKey().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CredentialPublicKey().load({ id: 'credential_public_key_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CredentialPublicKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessagingGeopermissionEntity

```ts
const messaging_geopermission = client.MessagingGeopermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `permissions` | `any` | No | A list of objects where each object represents the result of processing a messaging Geo Permission. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MessagingGeopermission().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MessagingGeopermission().update({
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

Create a new `MessagingGeopermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SafelistEntity

```ts
const safelist = client.Safelist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `phone_number` | `string` | No | The phone number or phone number 1k prefix in SafeList. |
| `sid` | `string` | No | The unique string that we created to identify the SafeList resource. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Safelist().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Safelist().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SafelistEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecondaryEntity

```ts
const secondary = client.Secondary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_sid` | `string` | No |  |
| `date_created` | `string` | No |  |
| `date_updated` | `string` | No |  |
| `secondary_auth_token` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secondary().create({
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

Create a new `SecondaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TwillioSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new TwillioSDK({
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

