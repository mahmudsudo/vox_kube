
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Twillio',
        slug: "twillio",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://accounts.twilio.com",

    auth: {
      prefix: 'Basic',
      basic: true,
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        accounts_v1_aw: {
        },
  
        accounts_v1_public_key: {
        },
  
        accounts_v1_safelist: {
        },
  
        accounts_v1_secondary_auth_token: {
        },
  
        auth_token_promotion: {
        },
  
        bulk: {
        },
  
        credential_aw: {
        },
  
        credential_public_key: {
        },
  
        messaging_geopermission: {
        },
  
        safelist: {
        },
  
        secondary: {
        },
  
    }
  }


  entity = {
    "accounts_v1_aw": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`",
          "short": "The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource."
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "friendly_name",
          "title": "Friendly Name",
          "type": "`$STRING`",
          "short": "The string that you assigned to describe the resource."
        },
        {
          "name": "sid",
          "title": "Sid",
          "type": "`$STRING`",
          "short": "The unique string that we created to identify the AWS resource."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URI for this resource, relative to `https://accounts.twilio.com`",
          "format": "uri"
        }
      ],
      "name": "accounts_v1_aw",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Credentials/AWS",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "AWS"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "AWS"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/Credentials/AWS",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "AWS"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "AWS"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.credentials`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "Page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page_size",
                    "orig": "PageSize",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page_token",
                    "orig": "PageToken",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "page_size",
                  "page_token"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/Credentials/AWS/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "AWS"
                },
                {
                  "var": "sid"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "AWS",
                "{sid}"
              ],
              "rename": {
                "param": {
                  "Sid": "sid"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "sid",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "sid"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "accounts_v1_public_key": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`",
          "short": "The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to."
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "friendly_name",
          "title": "Friendly Name",
          "type": "`$STRING`",
          "short": "The string that you assigned to describe the resource."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "sid",
          "title": "Sid",
          "type": "`$STRING`",
          "short": "The unique string that that we created to identify the PublicKey resource."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URI for this resource, relative to `https://accounts.twilio.com`",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "accounts_v1_public_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Credentials/PublicKeys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "PublicKeys"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "PublicKeys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/Credentials/PublicKeys",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "PublicKeys"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "PublicKeys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.credentials`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "Page",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page_size",
                    "orig": "PageSize",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "page_token",
                    "orig": "PageToken",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "page",
                  "page_size",
                  "page_token"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/Credentials/PublicKeys/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "PublicKeys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "PublicKeys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "Sid": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "accounts_v1_safelist": {
      "fields": [],
      "name": "accounts_v1_safelist",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/SafeList/Numbers",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "SafeList"
                },
                {
                  "lit": "Numbers"
                }
              ],
              "parts": [
                "v1",
                "SafeList",
                "Numbers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "phone_number",
                    "orig": "PhoneNumber",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "+18001234567"
                  }
                ]
              },
              "select": {
                "exist": [
                  "phone_number"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "accounts_v1_secondary_auth_token": {
      "fields": [],
      "name": "accounts_v1_secondary_auth_token",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/v1/AuthTokens/Secondary",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "AuthTokens"
                },
                {
                  "lit": "Secondary"
                }
              ],
              "parts": [
                "v1",
                "AuthTokens",
                "Secondary"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "suppress_email_notification",
                    "orig": "SuppressEmailNotification",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "suppress_email_notification"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "auth_token_promotion": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`",
          "short": "The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the secondary Auth Token was created for."
        },
        {
          "name": "auth_token",
          "title": "Auth Token",
          "type": "`$STRING`",
          "short": "The promoted Auth Token that must be used to authenticate future API requests."
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`",
          "short": "The date and time in UTC when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.",
          "format": "date-time"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.",
          "format": "date-time"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URI for this resource, relative to `https://accounts.twilio.com`",
          "format": "uri"
        }
      ],
      "name": "auth_token_promotion",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/AuthTokens/Promote",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "AuthTokens"
                },
                {
                  "lit": "Promote"
                }
              ],
              "parts": [
                "v1",
                "AuthTokens",
                "Promote"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "bulk": {
      "fields": [
        {
          "name": "items",
          "title": "Items",
          "type": "`$ARRAY`"
        }
      ],
      "name": "bulk",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Consents/Bulk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Consents"
                },
                {
                  "lit": "Bulk"
                }
              ],
              "parts": [
                "v1",
                "Consents",
                "Bulk"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Contacts/Bulk",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Contacts"
                },
                {
                  "lit": "Bulk"
                }
              ],
              "parts": [
                "v1",
                "Contacts",
                "Bulk"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "credential_aw": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`",
          "short": "The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AWS resource."
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "friendly_name",
          "title": "Friendly Name",
          "type": "`$STRING`",
          "short": "The string that you assigned to describe the resource."
        },
        {
          "name": "sid",
          "title": "Sid",
          "type": "`$STRING`",
          "short": "The unique string that we created to identify the AWS resource."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URI for this resource, relative to `https://accounts.twilio.com`",
          "format": "uri"
        }
      ],
      "name": "credential_aw",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Credentials/AWS/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "AWS"
                },
                {
                  "var": "sid"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "AWS",
                "{sid}"
              ],
              "rename": {
                "param": {
                  "Sid": "sid"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "sid",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "sid"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/Credentials/AWS/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "AWS"
                },
                {
                  "var": "sid"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "AWS",
                "{sid}"
              ],
              "rename": {
                "param": {
                  "Sid": "sid"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "sid",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "sid"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "credential_public_key": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`",
          "short": "The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Credential that the PublicKey resource belongs to."
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`",
          "short": "The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.",
          "format": "date-time"
        },
        {
          "name": "friendly_name",
          "title": "Friendly Name",
          "type": "`$STRING`",
          "short": "The string that you assigned to describe the resource."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "sid",
          "title": "Sid",
          "type": "`$STRING`",
          "short": "The unique string that that we created to identify the PublicKey resource."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URI for this resource, relative to `https://accounts.twilio.com`",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "credential_public_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/Credentials/PublicKeys/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "PublicKeys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "PublicKeys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "Sid": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/Credentials/PublicKeys/{Sid}",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Credentials"
                },
                {
                  "lit": "PublicKeys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "v1",
                "Credentials",
                "PublicKeys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "Sid": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "Sid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "messaging_geopermission": {
      "fields": [
        {
          "name": "permissions",
          "title": "Permissions",
          "type": "`$ANY`",
          "short": "A list of objects where each object represents the result of processing a messaging Geo Permission."
        }
      ],
      "name": "messaging_geopermission",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/Messaging/GeoPermissions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Messaging"
                },
                {
                  "lit": "GeoPermissions"
                }
              ],
              "parts": [
                "v1",
                "Messaging",
                "GeoPermissions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "country_code",
                    "orig": "CountryCode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "IN,PK,US"
                  }
                ]
              },
              "select": {
                "exist": [
                  "country_code"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/v1/Messaging/GeoPermissions",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "Messaging"
                },
                {
                  "lit": "GeoPermissions"
                }
              ],
              "parts": [
                "v1",
                "Messaging",
                "GeoPermissions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "safelist": {
      "fields": [
        {
          "name": "phone_number",
          "title": "Phone Number",
          "type": "`$STRING`",
          "short": "The phone number or phone number 1k prefix in SafeList."
        },
        {
          "name": "sid",
          "title": "Sid",
          "type": "`$STRING`",
          "short": "The unique string that we created to identify the SafeList resource."
        }
      ],
      "name": "safelist",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/SafeList/Numbers",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "SafeList"
                },
                {
                  "lit": "Numbers"
                }
              ],
              "parts": [
                "v1",
                "SafeList",
                "Numbers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/v1/SafeList/Numbers",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "SafeList"
                },
                {
                  "lit": "Numbers"
                }
              ],
              "parts": [
                "v1",
                "SafeList",
                "Numbers"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "phone_number",
                    "orig": "PhoneNumber",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "+18001234567"
                  }
                ]
              },
              "select": {
                "exist": [
                  "phone_number"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "secondary": {
      "fields": [
        {
          "name": "account_sid",
          "title": "Account Sid",
          "type": "`$STRING`"
        },
        {
          "name": "date_created",
          "title": "Date Created",
          "type": "`$STRING`"
        },
        {
          "name": "date_updated",
          "title": "Date Updated",
          "type": "`$STRING`"
        },
        {
          "name": "secondary_auth_token",
          "title": "Secondary Auth Token",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`"
        }
      ],
      "name": "secondary",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/v1/AuthTokens/Secondary",
              "segments": [
                {
                  "lit": "v1"
                },
                {
                  "lit": "AuthTokens"
                },
                {
                  "lit": "Secondary"
                }
              ],
              "parts": [
                "v1",
                "AuthTokens",
                "Secondary"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

