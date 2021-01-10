const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

module.exports = {
  // ------------- CONSTANTES PROPIAS --------------
  allowMethods: 'GET',
  allowHeaders:
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-filename, Content-disposition',
  allowExpose: 'x-filename, Content-disposition',
  allowOrigin: '*',
  // ------------- CONSTANTES INYECTABLES --------------
  // Global variables
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  messageTerminal: process.env.MESSAGE_TERMINAL,
  nodeEnvironment: process.env.NODE_ENV
}
