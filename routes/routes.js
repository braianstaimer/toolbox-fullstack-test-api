/**
 * Packages
 */
var express = require("express");

/**
 * Controllers
 */
const iechoController = require("../controllers/iecho.controller");

/**
 * Settings
 */
var app = express.Router();

var swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("../swagger/swagger.json");

/**
 * Documentation
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", function (req, res, next) {
  res.redirect("/api-docs");
});

//IECHO
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
app.get("/iecho", iechoController.reverseText);

module.exports = app;
