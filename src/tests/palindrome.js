const palindrome = (word) => {
  if (typeof word === 'undefined') return

  return word.split('').reverse().join('')
}

module.exports = palindrome
