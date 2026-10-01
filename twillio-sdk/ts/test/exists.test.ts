
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TwillioSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TwillioSDK.test()
    equal(testsdk instanceof TwillioSDK, true,
      'TwillioSDK.test() must return a client synchronously')
  })

})
