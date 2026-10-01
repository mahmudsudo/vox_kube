// Kubernetes Ts SDK

import { ApiResourceListEntity } from './entity/ApiResourceListEntity'
import { BindingEntity } from './entity/BindingEntity'
import { ComponentStatusEntity } from './entity/ComponentStatusEntity'
import { ConfigMapEntity } from './entity/ConfigMapEntity'
import { ConfigMapListEntity } from './entity/ConfigMapListEntity'
import { ConfigmapEntity } from './entity/ConfigmapEntity'
import { CoreV1Entity } from './entity/CoreV1Entity'
import { EndpointEntity } from './entity/EndpointEntity'
import { EventEntity } from './entity/EventEntity'
import { EvictionEntity } from './entity/EvictionEntity'
import { LimitRangeEntity } from './entity/LimitRangeEntity'
import { LimitRangeListEntity } from './entity/LimitRangeListEntity'
import { LimitrangeEntity } from './entity/LimitrangeEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { NodeEntity } from './entity/NodeEntity'
import { PersistentVolumeEntity } from './entity/PersistentVolumeEntity'
import { PersistentVolumeClaimEntity } from './entity/PersistentVolumeClaimEntity'
import { PersistentVolumeClaimListEntity } from './entity/PersistentVolumeClaimListEntity'
import { PersistentvolumeEntity } from './entity/PersistentvolumeEntity'
import { PersistentvolumeclaimEntity } from './entity/PersistentvolumeclaimEntity'
import { PodEntity } from './entity/PodEntity'
import { PodTemplateEntity } from './entity/PodTemplateEntity'
import { PodTemplateListEntity } from './entity/PodTemplateListEntity'
import { PodtemplateEntity } from './entity/PodtemplateEntity'
import { ReplicationControllerListEntity } from './entity/ReplicationControllerListEntity'
import { ReplicationcontrollerEntity } from './entity/ReplicationcontrollerEntity'
import { ResourceQuotaEntity } from './entity/ResourceQuotaEntity'
import { ResourceQuotaListEntity } from './entity/ResourceQuotaListEntity'
import { ResourcequotaEntity } from './entity/ResourcequotaEntity'
import { ScaleEntity } from './entity/ScaleEntity'
import { SecretEntity } from './entity/SecretEntity'
import { ServiceEntity } from './entity/ServiceEntity'
import { ServiceAccountEntity } from './entity/ServiceAccountEntity'
import { ServiceAccountListEntity } from './entity/ServiceAccountListEntity'
import { ServiceaccountEntity } from './entity/ServiceaccountEntity'
import { StatusEntity } from './entity/StatusEntity'
import { TokenEntity } from './entity/TokenEntity'

export type * from './KubernetesTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { KubernetesEntityBase } from './KubernetesEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class KubernetesSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('KubernetesSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('KubernetesSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('KubernetesSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.ApiResourceList().list()` / `client.ApiResourceList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiResourceList(entopts?: Record<string, any>) {
    const self = this
    return new ApiResourceListEntity(self, entopts)
  }


  // Entity access: `client.Binding().list()` / `client.Binding().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Binding(entopts?: Record<string, any>) {
    const self = this
    return new BindingEntity(self, entopts)
  }


  // Entity access: `client.ComponentStatus().list()` / `client.ComponentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ComponentStatus(entopts?: Record<string, any>) {
    const self = this
    return new ComponentStatusEntity(self, entopts)
  }


  // Entity access: `client.ConfigMap().list()` / `client.ConfigMap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConfigMap(entopts?: Record<string, any>) {
    const self = this
    return new ConfigMapEntity(self, entopts)
  }


  // Entity access: `client.ConfigMapList().list()` / `client.ConfigMapList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ConfigMapList(entopts?: Record<string, any>) {
    const self = this
    return new ConfigMapListEntity(self, entopts)
  }


  // Entity access: `client.Configmap().list()` / `client.Configmap().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Configmap(entopts?: Record<string, any>) {
    const self = this
    return new ConfigmapEntity(self, entopts)
  }


  // Entity access: `client.CoreV1().list()` / `client.CoreV1().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CoreV1(entopts?: Record<string, any>) {
    const self = this
    return new CoreV1Entity(self, entopts)
  }


  // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Endpoint(entopts?: Record<string, any>) {
    const self = this
    return new EndpointEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.Eviction().list()` / `client.Eviction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Eviction(entopts?: Record<string, any>) {
    const self = this
    return new EvictionEntity(self, entopts)
  }


  // Entity access: `client.LimitRange().list()` / `client.LimitRange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LimitRange(entopts?: Record<string, any>) {
    const self = this
    return new LimitRangeEntity(self, entopts)
  }


  // Entity access: `client.LimitRangeList().list()` / `client.LimitRangeList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LimitRangeList(entopts?: Record<string, any>) {
    const self = this
    return new LimitRangeListEntity(self, entopts)
  }


  // Entity access: `client.Limitrange().list()` / `client.Limitrange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Limitrange(entopts?: Record<string, any>) {
    const self = this
    return new LimitrangeEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.Node().list()` / `client.Node().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Node(entopts?: Record<string, any>) {
    const self = this
    return new NodeEntity(self, entopts)
  }


  // Entity access: `client.PersistentVolume().list()` / `client.PersistentVolume().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersistentVolume(entopts?: Record<string, any>) {
    const self = this
    return new PersistentVolumeEntity(self, entopts)
  }


  // Entity access: `client.PersistentVolumeClaim().list()` / `client.PersistentVolumeClaim().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersistentVolumeClaim(entopts?: Record<string, any>) {
    const self = this
    return new PersistentVolumeClaimEntity(self, entopts)
  }


  // Entity access: `client.PersistentVolumeClaimList().list()` / `client.PersistentVolumeClaimList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PersistentVolumeClaimList(entopts?: Record<string, any>) {
    const self = this
    return new PersistentVolumeClaimListEntity(self, entopts)
  }


  // Entity access: `client.Persistentvolume().list()` / `client.Persistentvolume().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Persistentvolume(entopts?: Record<string, any>) {
    const self = this
    return new PersistentvolumeEntity(self, entopts)
  }


  // Entity access: `client.Persistentvolumeclaim().list()` / `client.Persistentvolumeclaim().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Persistentvolumeclaim(entopts?: Record<string, any>) {
    const self = this
    return new PersistentvolumeclaimEntity(self, entopts)
  }


  // Entity access: `client.Pod().list()` / `client.Pod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pod(entopts?: Record<string, any>) {
    const self = this
    return new PodEntity(self, entopts)
  }


  // Entity access: `client.PodTemplate().list()` / `client.PodTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PodTemplate(entopts?: Record<string, any>) {
    const self = this
    return new PodTemplateEntity(self, entopts)
  }


  // Entity access: `client.PodTemplateList().list()` / `client.PodTemplateList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PodTemplateList(entopts?: Record<string, any>) {
    const self = this
    return new PodTemplateListEntity(self, entopts)
  }


  // Entity access: `client.Podtemplate().list()` / `client.Podtemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Podtemplate(entopts?: Record<string, any>) {
    const self = this
    return new PodtemplateEntity(self, entopts)
  }


  // Entity access: `client.ReplicationControllerList().list()` / `client.ReplicationControllerList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReplicationControllerList(entopts?: Record<string, any>) {
    const self = this
    return new ReplicationControllerListEntity(self, entopts)
  }


  // Entity access: `client.Replicationcontroller().list()` / `client.Replicationcontroller().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Replicationcontroller(entopts?: Record<string, any>) {
    const self = this
    return new ReplicationcontrollerEntity(self, entopts)
  }


  // Entity access: `client.ResourceQuota().list()` / `client.ResourceQuota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceQuota(entopts?: Record<string, any>) {
    const self = this
    return new ResourceQuotaEntity(self, entopts)
  }


  // Entity access: `client.ResourceQuotaList().list()` / `client.ResourceQuotaList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceQuotaList(entopts?: Record<string, any>) {
    const self = this
    return new ResourceQuotaListEntity(self, entopts)
  }


  // Entity access: `client.Resourcequota().list()` / `client.Resourcequota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Resourcequota(entopts?: Record<string, any>) {
    const self = this
    return new ResourcequotaEntity(self, entopts)
  }


  // Entity access: `client.Scale().list()` / `client.Scale().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Scale(entopts?: Record<string, any>) {
    const self = this
    return new ScaleEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts?: Record<string, any>) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Service(entopts?: Record<string, any>) {
    const self = this
    return new ServiceEntity(self, entopts)
  }


  // Entity access: `client.ServiceAccount().list()` / `client.ServiceAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ServiceAccount(entopts?: Record<string, any>) {
    const self = this
    return new ServiceAccountEntity(self, entopts)
  }


  // Entity access: `client.ServiceAccountList().list()` / `client.ServiceAccountList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ServiceAccountList(entopts?: Record<string, any>) {
    const self = this
    return new ServiceAccountListEntity(self, entopts)
  }


  // Entity access: `client.Serviceaccount().list()` / `client.Serviceaccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Serviceaccount(entopts?: Record<string, any>) {
    const self = this
    return new ServiceaccountEntity(self, entopts)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Status(entopts?: Record<string, any>) {
    const self = this
    return new StatusEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts?: Record<string, any>) {
    const self = this
    return new TokenEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new KubernetesSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return KubernetesSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Kubernetes' }
  }

  toString() {
    return 'Kubernetes ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = KubernetesSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  KubernetesEntityBase,

  KubernetesSDK,
  SDK,
}


