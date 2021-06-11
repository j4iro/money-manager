const palindrome = require('./palindrome')

describe('palidrome', () => {
  test('success', () => {
    expect(palindrome('jairo')).toBe('oriaj')
  })

  test('of undefined', () => {
    expect(palindrome()).toBeUndefined()
  })
})
