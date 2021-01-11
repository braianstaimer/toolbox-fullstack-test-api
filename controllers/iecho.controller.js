/************************************************************************
 * IMPORTS
 ************************************************************************/
const { getReverseText } = require('../services/iecho.services')
/************************************************************************
 * MESSAGES
 ************************************************************************/
const { errorMessages } = require('../messages/es')
/************************************************************************
 * CONTROLLERS
 ************************************************************************/
/**
 * Se le envía un texto y responde con el mismo texto invertido
 * @param {*} req
 * @param {*} res
 */
exports.getReverseText = (req, res) => {
  // realizar una busqueda criterios de busqueda
  if (!req.query.text) {
    // retornar error por parámetros inválidos:
    return res.status(400).send({
      error: errorMessages.noText
    })
  }
  // realizar operacion de invertir el texto
  const result = getReverseText(req.query.text)
  // Retornar informacion al cliente
  res.status(200).send(result)
}
