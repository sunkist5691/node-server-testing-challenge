const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

beforeEach(async () => {
   await db('players').truncate()
})

describe('server.js module', () => {
   it('is the testing evironment', () => {
      expect(process.env.DB_ENV).not.toBe('development')
      expect(process.env.DB_ENV).toBe('testing')
   })
})

describe('[GET] /players', () => {
   it('works', async () => {
      const res = await request(server).get('/players')
      expect(res.type).toMatch(/json/)
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({})
   })
})

describe('[POST] /players', () => {
   it('works', async () => {
      const res = await request(server).post('/players').send({ name: 'Xavi' })
      expect(res.type).toMatch(/json/)
      expect(res.body).toMatchObject({ name: 'Xavi' })
      expect(res.status).toBe(200)
   })
})