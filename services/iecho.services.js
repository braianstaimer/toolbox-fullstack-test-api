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
exports.reverseText = (text) => {
  //invertir texto
  const inverseText = text.split("").reverse().join("");
  //comprobar y asignar bandera palindrome dependiendo del texto
  const isPalindrome = text === inverseText;
  //generar objeto de respuesta
  const dataResponse = {
    text: inverseText,
    palidrome: isPalindrome,
  };
  //retonar objeto al controlador
  return dataResponse;
};
