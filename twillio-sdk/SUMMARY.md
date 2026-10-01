# Twilio - Accounts

This is the public Twilio REST API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 11 entities and 20 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AccountsV1Aw

Results: Created; OK; The resource was deleted successfully.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.
- `date_created`: The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `date_updated`: The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `friendly_name`: The string that you assigned to describe the resource.
- `sid`: The unique string that we created to identify the AWS resource.

### AccountsV1PublicKey

Results: Created; OK; The resource was deleted successfully.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to.
- `date_created`: The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `date_updated`: The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `friendly_name`: The string that you assigned to describe the resource.
- `sid`: The unique string that that we created to identify the PublicKey resource.

### AccountsV1Safelist

Results: The resource was deleted successfully.

SDK operations: `remove`.

### AccountsV1SecondaryAuthToken

Results: The resource was deleted successfully.

SDK operations: `remove`.

### AuthTokenPromotion

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
- `auth_token`: The promoted Auth Token that must be used to authenticate future API requests.
- `date_created`: The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- `date_updated`: The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- `url`: The URI for this resource, relative to `https://accounts.twilio.com`

### Bulk

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `items`: A list of objects where each object represents the result of processing a `correlation_id`. Each object contains the following fields: `correlation_id`, a unique 32-character UUID that maps the response to the original request; `error_code`, an integer where 0 indicates success and any non-zero value represents an error; and `error_messages`, an array of strings describing specific validation errors encountered. If the request is successful, the error_messages array will be empty.

### CredentialAw

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource.
- `date_created`: The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `date_updated`: The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `friendly_name`: The string that you assigned to describe the resource.
- `sid`: The unique string that we created to identify the AWS resource.

### CredentialPublicKey

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to.
- `date_created`: The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `date_updated`: The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
- `friendly_name`: The string that you assigned to describe the resource.
- `sid`: The unique string that that we created to identify the PublicKey resource.

### MessagingGeopermission

Results: OK.

SDK operations: `load`, `update`.

Key fields to recognise:

- `permissions`: A list of objects where each object represents the result of processing a messaging Geo Permission. Each object contains the following fields: `country_code`, the country code of the country for which the permission was updated; `type`, the type of the permission that is country; `enabled`, true if the permission is enabled else false; `error_code`, an integer where 0 indicates success and any non-zero value represents an error; and `error_messages`, an array of strings describing specific validation errors encountered. If the request is successful, the error_messages array will be empty.

### Safelist

Results: Created; OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `phone_number`: The phone number or phone number 1k prefix in SafeList.
- `sid`: The unique string that we created to identify the SafeList resource.

### Secondary

Results: Created.

SDK operations: `create`.

Key fields to recognise:

- `account_sid`: The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for.
- `date_created`: The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- `date_updated`: The date and time in UTC when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
- `secondary_auth_token`: The generated secondary Auth Token that can be used to authenticate future API requests.
- `url`: The URI for this resource, relative to `https://accounts.twilio.com`

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AccountsV1Aw | `create` | `POST /v1/Credentials/AWS` | Required |
| AccountsV1Aw | `list` | `GET /v1/Credentials/AWS` | Required |
| AccountsV1Aw | `remove` | `DELETE /v1/Credentials/AWS/{Sid}` | Required |
| AccountsV1PublicKey | `create` | `POST /v1/Credentials/PublicKeys` | Required |
| AccountsV1PublicKey | `list` | `GET /v1/Credentials/PublicKeys` | Required |
| AccountsV1PublicKey | `remove` | `DELETE /v1/Credentials/PublicKeys/{Sid}` | Required |
| AccountsV1Safelist | `remove` | `DELETE /v1/SafeList/Numbers` | Required |
| AccountsV1SecondaryAuthToken | `remove` | `DELETE /v1/AuthTokens/Secondary` | Required |
| AuthTokenPromotion | `create` | `POST /v1/AuthTokens/Promote` | Required |
| Bulk | `create` | `POST /v1/Consents/Bulk` | Required |
| Bulk | `create` | `POST /v1/Contacts/Bulk` | Required |
| CredentialAw | `create` | `POST /v1/Credentials/AWS/{Sid}` | Required |
| CredentialAw | `load` | `GET /v1/Credentials/AWS/{Sid}` | Required |
| CredentialPublicKey | `create` | `POST /v1/Credentials/PublicKeys/{Sid}` | Required |
| CredentialPublicKey | `load` | `GET /v1/Credentials/PublicKeys/{Sid}` | Required |
| MessagingGeopermission | `load` | `GET /v1/Messaging/GeoPermissions` | Required |
| MessagingGeopermission | `update` | `PATCH /v1/Messaging/GeoPermissions` | Required |
| Safelist | `create` | `POST /v1/SafeList/Numbers` | Required |
| Safelist | `load` | `GET /v1/SafeList/Numbers` | Required |
| Secondary | `create` | `POST /v1/AuthTokens/Secondary` | Required |

## Connect to the API

- API server: `https://accounts.twilio.com`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

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

