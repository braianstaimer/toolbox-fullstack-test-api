/************************************************************************
 * IMPORTS
 ************************************************************************/

/************************************************************************
 * VARIABLES
 ************************************************************************/

/************************************************************************
 * SERVICES
 ************************************************************************/

/**
 * Recibe un texto y responde con el mismo texto invertido
 * Verifica si el texto es un palindrome, y retorna una bandera
 * @param {*} text                     - Texto a invertir
 */
exports.getReverseText = (text) => {
  // invertir texto
  const invertedText = this.inverseText(text)
  // comprobar y asignar bandera palindrome dependiendo del texto
  const isPalindrome = this.isPalindrome(text, invertedText)
  // generar objeto de respuesta
  const dataResponse = {
    text: invertedText,
    palidrome: isPalindrome
  }
  // retonar objeto al controlador
  return dataResponse
}

/**
 * Recibe un texto y responde con el mismo texto invertido
 * @param {*} text                     - Texto a invertir
 */
exports.inverseText = (text) => {
  // invertir texto y retornar el nuevo texto
  return text.split('').reverse().join('')
}

/**
 * Verifica si el texto es un palindrome, y retorna una bandera
 * @param {*} text                      - Texto original
 * @param {*} inversedText              - Texto invertido
 */
exports.isPalindrome = (text, invertedText) => {
  // invertir texto y retornar el nuevo texto
  return text === invertedText
}
