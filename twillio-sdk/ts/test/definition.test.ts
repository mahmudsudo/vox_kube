import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "accounts_v1_aw",
    "accessor": "AccountsV1Aw",
    "op": "create",
    "method": "POST",
    "path": "/v1/Credentials/AWS",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "accounts_v1_aw",
    "accessor": "AccountsV1Aw",
    "op": "list",
    "method": "GET",
    "path": "/v1/Credentials/AWS",
    "args": [],
    "select": {
      "page": "v1",
      "page_size": "v1",
      "page_token": "v1"
    },
    "headers": [],
    "query": [
      "PageSize",
      "Page",
      "PageToken"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "credentials": [],
      "meta": {
        "first_page_url": "https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0",
        "key": "credentials",
        "next_page_url": null,
        "page": 0,
        "page_size": 50,
        "previous_page_url": null,
        "url": "https://accounts.twilio.com/v1/Credentials/AWS?PageSize=50&Page=0"
      }
    },
    "idField": "id"
  },
  {
    "entity": "accounts_v1_aw",
    "accessor": "AccountsV1Aw",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/Credentials/AWS/{Sid}",
    "args": [
      {
        "name": "sid",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "accounts_v1_public_key",
    "accessor": "AccountsV1PublicKey",
    "op": "create",
    "method": "POST",
    "path": "/v1/Credentials/PublicKeys",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/PublicKeys/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "accounts_v1_public_key",
    "accessor": "AccountsV1PublicKey",
    "op": "list",
    "method": "GET",
    "path": "/v1/Credentials/PublicKeys",
    "args": [],
    "select": {
      "page": "v1",
      "page_size": "v1",
      "page_token": "v1"
    },
    "headers": [],
    "query": [
      "PageSize",
      "Page",
      "PageToken"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "credentials": [],
      "meta": {
        "first_page_url": "https://accounts.twilio.com/v1/Credentials/PublicKeys?PageSize=50&Page=0",
        "key": "credentials",
        "next_page_url": null,
        "page": 0,
        "page_size": 50,
        "previous_page_url": null,
        "url": "https://accounts.twilio.com/v1/Credentials/PublicKeys?PageSize=50&Page=0"
      }
    },
    "idField": "id"
  },
  {
    "entity": "accounts_v1_public_key",
    "accessor": "AccountsV1PublicKey",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/Credentials/PublicKeys/{Sid}",
    "args": [
      {
        "name": "id",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "accounts_v1_safelist",
    "accessor": "AccountsV1Safelist",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/SafeList/Numbers",
    "args": [],
    "select": {
      "phone_number": "v1"
    },
    "headers": [],
    "query": [
      "PhoneNumber"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "accounts_v1_secondary_auth_token",
    "accessor": "AccountsV1SecondaryAuthToken",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/AuthTokens/Secondary",
    "args": [],
    "select": {
      "suppress_email_notification": "v1"
    },
    "headers": [],
    "query": [
      "SuppressEmailNotification"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "auth_token_promotion",
    "accessor": "AuthTokenPromotion",
    "op": "create",
    "method": "POST",
    "path": "/v1/AuthTokens/Promote",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "auth_token": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "url": "https://accounts.twilio.com/v1/AuthTokens/Promote"
    },
    "idField": "id"
  },
  {
    "entity": "credential_aw",
    "accessor": "CredentialAw",
    "op": "create",
    "method": "POST",
    "path": "/v1/Credentials/AWS/{Sid}",
    "args": [
      {
        "name": "sid",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "credential_aw",
    "accessor": "CredentialAw",
    "op": "load",
    "method": "GET",
    "path": "/v1/Credentials/AWS/{Sid}",
    "args": [
      {
        "name": "sid",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/AWS/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "credential_public_key",
    "accessor": "CredentialPublicKey",
    "op": "create",
    "method": "POST",
    "path": "/v1/Credentials/PublicKeys/{Sid}",
    "args": [
      {
        "name": "id",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/PublicKeys/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "credential_public_key",
    "accessor": "CredentialPublicKey",
    "op": "load",
    "method": "GET",
    "path": "/v1/Credentials/PublicKeys/{Sid}",
    "args": [
      {
        "name": "id",
        "wire": "Sid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "friendly_name": "friendly_name",
      "sid": "CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "url": "https://accounts.twilio.com/v1/Credentials/PublicKeys/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    "idField": "id"
  },
  {
    "entity": "messaging_geopermission",
    "accessor": "MessagingGeopermission",
    "op": "load",
    "method": "GET",
    "path": "/v1/Messaging/GeoPermissions",
    "args": [],
    "select": {
      "country_code": "v1"
    },
    "headers": [],
    "query": [
      "CountryCode"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "permissions": [
        {
          "country_code": "IN",
          "type": "country",
          "enabled": false,
          "prefix": "+91",
          "message": ""
        },
        {
          "country_code": "PK",
          "type": "country",
          "enabled": true,
          "prefix": "+92",
          "message": "High Risk Country"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "messaging_geopermission",
    "accessor": "MessagingGeopermission",
    "op": "update",
    "method": "PATCH",
    "path": "/v1/Messaging/GeoPermissions",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "permissions": [
        {
          "country_code": "IN",
          "type": "country",
          "enabled": false,
          "error_code": 0,
          "error_messages": []
        },
        {
          "country_code": "PK",
          "type": "country",
          "enabled": true,
          "error_code": 30649,
          "error_messages": [
            "High risk country permission cannot be updated"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "safelist",
    "accessor": "Safelist",
    "op": "create",
    "method": "POST",
    "path": "/v1/SafeList/Numbers",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "sid": "GNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "phone_number": "+18001234567"
    },
    "idField": "id"
  },
  {
    "entity": "safelist",
    "accessor": "Safelist",
    "op": "load",
    "method": "GET",
    "path": "/v1/SafeList/Numbers",
    "args": [],
    "select": {
      "phone_number": "v1"
    },
    "headers": [],
    "query": [
      "PhoneNumber"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "sid": "GNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "phone_number": "+18001234567"
    },
    "idField": "id"
  },
  {
    "entity": "secondary",
    "accessor": "Secondary",
    "op": "create",
    "method": "POST",
    "path": "/v1/AuthTokens/Secondary",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "account_sid": "ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "date_created": "2015-07-31T04:00:00Z",
      "date_updated": "2015-07-31T04:00:00Z",
      "secondary_auth_token": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      "url": "https://accounts.twilio.com/v1/AuthTokens/Secondary"
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
