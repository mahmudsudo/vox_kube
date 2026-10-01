# Twillio TypeScript SDK



The TypeScript SDK for the Twillio API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccountsV1Aw()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/twillio-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/twillio-sdk
npm install ./twillio-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { TwillioSDK } from '@voxgig-sdk/twillio-sdk'

const client = new TwillioSDK({
  apikey: process.env.TWILLIO_APIKEY,
  secret: process.env.TWILLIO_SECRET,
})
```

### 2. List accountsv1aw records

`list()` resolves to an array of AccountsV1Aw ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const accountsv1aws = await client.AccountsV1Aw().list()

for (const accountsv1aw of accountsv1aws) {
  console.log(accountsv1aw)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created AccountsV1Aw ENTITY (.data() for the record)
const created = await client.AccountsV1Aw().create({
  account_sid: 'example_account_sid',
  date_created: 'example_date_created',
})

// Remove
await client.AccountsV1Aw().remove({
  sid: 'example_sid',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const accountsv1aws = await client.AccountsV1Aw().list()
  console.log(accountsv1aws)
} catch (err) {
  console.error('list failed:', err)
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
const client = TwillioSDK.test()

const accountsv1aw = await client.AccountsV1Aw().list()
// accountsv1aw is the entity, populated with mock response data
// — call accountsv1aw.data() for the record itself
console.log(accountsv1aw)
```

You can also use the instance method:

```ts
const client = new TwillioSDK({ apikey: '...', secret: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AccountsV1Aw()

// First call runs the operation and stores its result
await entity.list()

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

const client = new TwillioSDK({
  apikey: '...',
  secret: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TWILLIO_TEST_LIVE=TRUE
TWILLIO_APIKEY=<your-key>
TWILLIO_SECRET=<your-secret>
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

### TwillioSDK

#### Constructor

```ts
new TwillioSDK(options?: {
  apikey?: string
  secret?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `secret` | `string` | API secret for authentication. |
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
| `AccountsV1Aw(data?)` | `AccountsV1AwEntity` | Create an AccountsV1Aw entity instance. |
| `AccountsV1PublicKey(data?)` | `AccountsV1PublicKeyEntity` | Create an AccountsV1PublicKey entity instance. |
| `AccountsV1Safelist(data?)` | `AccountsV1SafelistEntity` | Create an AccountsV1Safelist entity instance. |
| `AccountsV1SecondaryAuthToken(data?)` | `AccountsV1SecondaryAuthTokenEntity` | Create an AccountsV1SecondaryAuthToken entity instance. |
| `AuthTokenPromotion(data?)` | `AuthTokenPromotionEntity` | Create an AuthTokenPromotion entity instance. |
| `Bulk(data?)` | `BulkEntity` | Create a Bulk entity instance. |
| `CredentialAw(data?)` | `CredentialAwEntity` | Create a CredentialAw entity instance. |
| `CredentialPublicKey(data?)` | `CredentialPublicKeyEntity` | Create a CredentialPublicKey entity instance. |
| `MessagingGeopermission(data?)` | `MessagingGeopermissionEntity` | Create a MessagingGeopermission entity instance. |
| `Safelist(data?)` | `SafelistEntity` | Create a Safelist entity instance. |
| `Secondary(data?)` | `SecondaryEntity` | Create a Secondary entity instance. |
| `tester(testopts?, sdkopts?)` | `TwillioSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TwillioSDK.test(testopts?, sdkopts?)` | `TwillioSDK` | Create a test-mode client. |

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
| `client` | `client(): TwillioSDK` | Return the parent SDK client. |
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

#### AccountsV1Aw

| Field | Description |
| --- | --- |
| `account_sid` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | The string that you assigned to describe the resource. |
| `sid` | The unique string that we created to identify the AWS resource. |
| `url` | The URI for this resource, relative to `https://accounts.twilio.com` |

Operations: create, list, remove.

API path: `/v1/Credentials/AWS`

#### AccountsV1PublicKey

| Field | Description |
| --- | --- |
| `account_sid` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | The string that you assigned to describe the resource. |
| `id` |  |
| `sid` | The unique string that that we created to identify the PublicKey resource. |
| `url` | The URI for this resource, relative to `https://accounts.twilio.com` |

Operations: create, list, remove.

API path: `/v1/Credentials/PublicKeys`

#### AccountsV1Safelist

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v1/SafeList/Numbers`

#### AccountsV1SecondaryAuthToken

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v1/AuthTokens/Secondary`

#### AuthTokenPromotion

| Field | Description |
| --- | --- |
| `account_sid` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for. |
| `auth_token` | The promoted Auth Token that must be used to authenticate future API requests. |
| `date_created` | The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `date_updated` | The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `url` | The URI for this resource, relative to `https://accounts.twilio.com` |

Operations: create.

API path: `/v1/AuthTokens/Promote`

#### Bulk

| Field | Description |
| --- | --- |
| `items` |  |

Operations: create.

API path: `/v1/Consents/Bulk`

#### CredentialAw

| Field | Description |
| --- | --- |
| `account_sid` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | The string that you assigned to describe the resource. |
| `sid` | The unique string that we created to identify the AWS resource. |
| `url` | The URI for this resource, relative to `https://accounts.twilio.com` |

Operations: create, load.

API path: `/v1/Credentials/AWS/{Sid}`

#### CredentialPublicKey

| Field | Description |
| --- | --- |
| `account_sid` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | The string that you assigned to describe the resource. |
| `id` |  |
| `sid` | The unique string that that we created to identify the PublicKey resource. |
| `url` | The URI for this resource, relative to `https://accounts.twilio.com` |

Operations: create, load.

API path: `/v1/Credentials/PublicKeys/{Sid}`

#### MessagingGeopermission

| Field | Description |
| --- | --- |
| `permissions` | A list of objects where each object represents the result of processing a messaging Geo Permission. |

Operations: load, update.

API path: `/v1/Messaging/GeoPermissions`

#### Safelist

| Field | Description |
| --- | --- |
| `phone_number` | The phone number or phone number 1k prefix in SafeList. |
| `sid` | The unique string that we created to identify the SafeList resource. |

Operations: create, load.

API path: `/v1/SafeList/Numbers`

#### Secondary

| Field | Description |
| --- | --- |
| `account_sid` |  |
| `date_created` |  |
| `date_updated` |  |
| `secondary_auth_token` |  |
| `url` |  |

Operations: create.

API path: `/v1/AuthTokens/Secondary`



## Entities


### AccountsV1Aw

Create an instance: `const accounts_v1_aw = client.AccountsV1Aw()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | `string` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | The string that you assigned to describe the resource. |
| `sid` | `string` | The unique string that we created to identify the AWS resource. |
| `url` | `string` | The URI for this resource, relative to `https://accounts.twilio.com` |

#### Example: List

```ts
const accounts_v1_aws = await client.AccountsV1Aw().list()
```

#### Example: Create

```ts
const accounts_v1_aw = await client.AccountsV1Aw().create({
})
```


### AccountsV1PublicKey

Create an instance: `const accounts_v1_public_key = client.AccountsV1PublicKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | `string` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | The string that you assigned to describe the resource. |
| `id` | `string` |  |
| `sid` | `string` | The unique string that that we created to identify the PublicKey resource. |
| `url` | `string` | The URI for this resource, relative to `https://accounts.twilio.com` |

#### Example: List

```ts
const accounts_v1_public_keys = await client.AccountsV1PublicKey().list()
```

#### Example: Create

```ts
const accounts_v1_public_key = await client.AccountsV1PublicKey().create({
})
```


### AccountsV1Safelist

Create an instance: `const accounts_v1_safelist = client.AccountsV1Safelist()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AccountsV1SecondaryAuthToken

Create an instance: `const accounts_v1_secondary_auth_token = client.AccountsV1SecondaryAuthToken()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### AuthTokenPromotion

Create an instance: `const auth_token_promotion = client.AuthTokenPromotion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for. |
| `auth_token` | `string` | The promoted Auth Token that must be used to authenticate future API requests. |
| `date_created` | `string` | The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `date_updated` | `string` | The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `url` | `string` | The URI for this resource, relative to `https://accounts.twilio.com` |

#### Example: Create

```ts
const auth_token_promotion = await client.AuthTokenPromotion().create({
})
```


### Bulk

Create an instance: `const bulk = client.Bulk()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |

#### Example: Create

```ts
const bulk = await client.Bulk().create({
})
```


### CredentialAw

Create an instance: `const credential_aw = client.CredentialAw()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource. |
| `date_created` | `string` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | The string that you assigned to describe the resource. |
| `sid` | `string` | The unique string that we created to identify the AWS resource. |
| `url` | `string` | The URI for this resource, relative to `https://accounts.twilio.com` |

#### Example: Load

```ts
const credential_aw = await client.CredentialAw().load({ sid: 'sid' })
```

#### Example: Create

```ts
const credential_aw = await client.CredentialAw().create({
  sid: 'example_sid',
})
```


### CredentialPublicKey

Create an instance: `const credential_public_key = client.CredentialPublicKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` | The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to. |
| `date_created` | `string` | The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `date_updated` | `string` | The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. |
| `friendly_name` | `string` | The string that you assigned to describe the resource. |
| `id` | `string` |  |
| `sid` | `string` | The unique string that that we created to identify the PublicKey resource. |
| `url` | `string` | The URI for this resource, relative to `https://accounts.twilio.com` |

#### Example: Load

```ts
const credential_public_key = await client.CredentialPublicKey().load({ id: 'credential_public_key_id' })
```

#### Example: Create

```ts
const credential_public_key = await client.CredentialPublicKey().create({
  id: 'example_id',
})
```


### MessagingGeopermission

Create an instance: `const messaging_geopermission = client.MessagingGeopermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `permissions` | `any` | A list of objects where each object represents the result of processing a messaging Geo Permission. |

#### Example: Load

```ts
const messaging_geopermission = await client.MessagingGeopermission().load()
```


### Safelist

Create an instance: `const safelist = client.Safelist()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `phone_number` | `string` | The phone number or phone number 1k prefix in SafeList. |
| `sid` | `string` | The unique string that we created to identify the SafeList resource. |

#### Example: Load

```ts
const safelist = await client.Safelist().load()
```

#### Example: Create

```ts
const safelist = await client.Safelist().create({
})
```


### Secondary

Create an instance: `const secondary = client.Secondary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_sid` | `string` |  |
| `date_created` | `string` |  |
| `date_updated` | `string` |  |
| `secondary_auth_token` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const secondary = await client.Secondary().create({
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
twillio/
├── src/
│   ├── TwillioSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { TwillioSDK } from '@voxgig-sdk/twillio-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const accountsv1aw = client.AccountsV1Aw()
await accountsv1aw.list()

// accountsv1aw.data() now returns the accountsv1aw data from the last `list`
// accountsv1aw.match() returns the last match criteria
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
