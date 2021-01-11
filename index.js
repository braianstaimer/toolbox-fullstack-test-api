const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const cfg = require('./cf.js')
console.log(cfg)

const jsonConfig = require('./utils/swagger/swagger.config')
jsonConfig.init()
// Cargar rutas
const routes = require('./routes/routes.js')

// Configurar express
const app = express()

app.use(
  bodyParser.json({
    limit: '50mb'
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  })
)
app.use(helmet())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', cfg.allowMethods)
  res.setHeader('Access-Control-Allow-Origin', cfg.allowOrigin)
  res.setHeader('Access-Control-Allow-Headers', cfg.allowHeaders)
  res.setHeader('Access-Control-Expose-Headers', cfg.allowExpose)
  next()
})

app.use(routes)

const server = app.listen(parseInt(cfg.port), function () {
  console.log(cfg.port + '::' + cfg.messageTerminal)
})

function stop () {
  server.close()
}

module.exports = server
module.exports.stop = stop
