import { test } from 'uvu'
import assert from 'uvu/assert'

test('Example test', async () => {
  const value = true
  assert.ok(value)
})


test.run()