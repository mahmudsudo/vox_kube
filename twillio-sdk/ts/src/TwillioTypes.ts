// Typed models for the Twillio SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccountsV1Aw {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  sid?: string
  url?: string
}

export interface AccountsV1AwListMatch {
  page?: number
  page_size?: number
  page_token?: string
}

export interface AccountsV1AwCreateData {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  sid?: string
  url?: string
}

export interface AccountsV1AwRemoveMatch {
  sid: string
}

export interface AccountsV1PublicKey {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  id?: string
  sid?: string
  url?: string
}

export interface AccountsV1PublicKeyListMatch {
  page?: number
  page_size?: number
  page_token?: string
}

export interface AccountsV1PublicKeyCreateData {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  id?: string
  sid?: string
  url?: string
}

export interface AccountsV1PublicKeyRemoveMatch {
  id: string
}

export interface AccountsV1Safelist {
}

export interface AccountsV1SafelistRemoveMatch {
  phone_number?: string
}

export interface AccountsV1SecondaryAuthToken {
}

export interface AccountsV1SecondaryAuthTokenRemoveMatch {
  suppress_email_notification?: boolean
}

export interface AuthTokenPromotion {
  account_sid?: string
  auth_token?: string
  date_created?: string
  date_updated?: string
  url?: string
}

export interface AuthTokenPromotionCreateData {
  account_sid?: string
  auth_token?: string
  date_created?: string
  date_updated?: string
  url?: string
}

export interface Bulk {
  items?: any[]
}

export interface BulkCreateData {
  items?: any[]
}

export interface CredentialAw {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  sid?: string
  url?: string
}

export interface CredentialAwLoadMatch {
  sid: string
}

export interface CredentialAwCreateData {
  sid: string
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  url?: string
}

export interface CredentialPublicKey {
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  id?: string
  sid?: string
  url?: string
}

export interface CredentialPublicKeyLoadMatch {
  id: string
}

export interface CredentialPublicKeyCreateData {
  id: string
  account_sid?: string
  date_created?: string
  date_updated?: string
  friendly_name?: string
  sid?: string
  url?: string
}

export interface MessagingGeopermission {
  permissions?: any
}

export interface MessagingGeopermissionLoadMatch {
  country_code?: string
}

export interface MessagingGeopermissionUpdateData {
  permissions?: any
}

export interface Safelist {
  phone_number?: string
  sid?: string
}

export interface SafelistLoadMatch {
  phone_number?: string
}

export interface SafelistCreateData {
  phone_number?: string
  sid?: string
}

export interface Secondary {
  account_sid?: string
  date_created?: string
  date_updated?: string
  secondary_auth_token?: string
  url?: string
}

export interface SecondaryCreateData {
  account_sid?: string
  date_created?: string
  date_updated?: string
  secondary_auth_token?: string
  url?: string
}

