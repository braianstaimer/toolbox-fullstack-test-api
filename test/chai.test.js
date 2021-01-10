// Tests utilizando Mocha + Chai
const chai = require('chai')
const chaiHttp = require('chai-http')

let server = null
const should = chai.should()

chai.use(chaiHttp)

before(async () => {
  server = require('../index')
})

after(async () => {
  server.stop()
})

describe('Chai - GET /iecho', function () {
  const path = '/iecho'
  it('Invertir texto y validar si es palidrome', (done) => {
    const text = 'reconocer'
    const invertedText = 'reconocer'
    const palidrome = true
    const params = {
      text: text
    }
    chai
      .request(server)
      .get(path)
      .query(params)
      .then((result) => {
        should.equal(result.statusCode, 200)
        result.body.text.should.eq(invertedText)
        result.body.palidrome.should.eq(palidrome)
      })
      .catch((err) => console.log(err))
    done()
  })
  it('Invertir texto y validar que no es palidrome', (done) => {
    const text = 'test'
    const invertedText = 'tset'
    const palidrome = false
    const params = {
      text: text
    }
    chai
      .request(server)
      .get(path)
      .query(params)
      .then((result) => {
        should.equal(result.statusCode, 200)
        result.body.text.should.eq(invertedText)
        result.body.palidrome.should.eq(palidrome)
      })
      .catch((err) => console.log(err))
    done()
  })
  it('Retornar parámetros inválidos', (done) => {
    const text = ''
    const error = 'no text'
    const params = {
      text: text
    }
    chai
      .request(server)
      .get(path)
      .query(params)
      .then((result) => {
        should.equal(result.statusCode, 400)
        result.body.error.should.eq(error)
      })
      .catch((err) => console.log(err))
    done()
  })
})
