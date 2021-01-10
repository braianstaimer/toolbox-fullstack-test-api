// Tests utilizando Mocha + Supertest
const request = require('supertest')
const assert = require('assert')

let server = null

before(async () => {
  server = require('../index')
})

after(async () => {
  server.stop()
})

describe('Supertext - GET /iecho', function () {
  const path = '/iecho'
  it('Invertir texto y validar si es palidrome', (done) => {
    const text = 'reconocer'
    const invertedText = 'reconocer'
    const palidrome = true
    const params = {
      text: text
    }
    request(server)
      .get(path)
      .set('Accept', 'application/json')
      .query(params)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((result) => {
        assert(result.body.text, invertedText)
        assert(result.body.palidrome, palidrome)
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
    request(server)
      .get(path)
      .set('Accept', 'application/json')
      .query(params)
      .expect('Content-Type', /json/)
      .expect(200, {
        text: invertedText,
        palidrome: palidrome
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
    request(server)
      .get(path)
      .set('Accept', 'application/json')
      .query(params)
      .expect('Content-Type', /json/)
      .expect(400, {
        error: error
      })
      .catch((err) => console.log(err))
    done()
  })
})
