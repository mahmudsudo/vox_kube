
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KubernetesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = KubernetesSDK.test()
    equal(testsdk instanceof KubernetesSDK, true,
      'KubernetesSDK.test() must return a client synchronously')
  })

})
