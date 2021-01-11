//Source:
//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
//https://desarrolloweb.com/faq/la-mejor-manera-de-eliminar-tildes-o-acentos-en-javascript
//https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4

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
  const invertedText = this.inverseText(text);
  // comprobar y asignar bandera palindrome dependiendo del texto
  const isPalindrome = this.isPalindrome(text, invertedText);
  // generar objeto de respuesta
  const dataResponse = {
    text: invertedText,
    palindrome: isPalindrome,
  };
  // retonar objeto al controlador
  return dataResponse;
};

/**
 * Recibe un texto y responde con el mismo texto invertido
 * @param {*} text                     - Texto a invertir
 */
exports.inverseText = (text) => {
  // invertir texto y retornar el nuevo texto
  return text.split("").reverse().join("");
};

/**
 * Verifica si el texto es un palindrome, y retorna una bandera
 * @param {*} text                      - Texto original
 * @param {*} inversedText              - Texto invertido
 */
exports.isPalindrome = (text, invertedText) => {
  //expresion regular para eliminar signos de puntuacion y acentos
  var re = /[^A-Za-z0-9]/g;
  //formatear palabras
  const textUpperCase = text
    //eliminar acentos
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    //convertir a mayusculas
    .toUpperCase()
    //reemplazar utilizando la expresion regular
    .replace(re, "");
  const invertedTextUpperCase = invertedText
    //eliminar acentos
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    //convertir a mayusculas
    .toUpperCase();
  //validar si el contenido es el mismo
  return textUpperCase === invertedTextUpperCase;
};
