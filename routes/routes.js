/**
 * Packages
 */
const express = require('express')

/**
 * Controllers
 */
const iechoController = require('../controllers/iecho.controller')

/**
 * Settings
 */
const app = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')

/**
 * Documentation
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get('/', function (req, res, next) {
  res.redirect('/api-docs')
})

// IECHO
/**
 * @swagger
 * /iecho:
 *   get:
 *     summary: "Invierte un texto"
 *     description: Se le envía un texto y responde con el mismo texto invertido
 *     tags: [IECHO]
 *     parameters:
 *         - $ref: "#/parameters/textQuery"
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Parámetros inválidos.
 */
app.get('/iecho', iechoController.getReverseText)

module.exports = app
