// Tests utilizando Mocha
const assert = require('assert')

const {
  inverseText,
  isPalindrome,
  getReverseText
} = require('../services/iecho.services')

describe('String', function () {
  describe('#inverseText(text)', function () {
    it('Invertir texto y retornar el nuevo texto', function () {
      const text = 'test'
      const invertedText = 'tset'
      assert.strictEqual(inverseText(text), invertedText)
    })
    it('El texto invertido no es una respuesta correcta al texto enviado', function () {
      const text = 'test'
      const invertedText = 'tset1'
      assert.notStrictEqual(inverseText(text), invertedText)
    })
  })
  describe('#isPalindrome(text, invertedText)', function () {
    it('Verifica si el texto es un palindrome, y retorna una bandera', function () {
      const text = 'reconocer'
      const invertedText = 'reconocer'
      const palindrome = true
      assert.strictEqual(isPalindrome(text, invertedText), palindrome)
    })
    it('El texto no es un palindrome', function () {
      const text = 'test'
      const invertedText = 'tset'
      const palindrome = true
      assert.notStrictEqual(isPalindrome(text, invertedText), palindrome)
    })
  })
  describe('#getReverseText(text)', function () {
    it('Invierte el texto de entrada, verifica si el texto es un palindrome, y retorna una bandera', function () {
      const text = 'reconocer'
      const invertedText = 'reconocer'
      const palindrome = true
      const result = { text: invertedText, palindrome }
      assert.deepStrictEqual(getReverseText(text), result)
    })
    it('Invierte el texto de entrada, verifica si el texto es un palindrome, y retorna una bandera', function () {
      const text = 'test'
      const invertedText = 'tset'
      const palindrome = false
      const result = { text: invertedText, palindrome }
      assert.deepStrictEqual(getReverseText(text), result)
    })
  })
})
