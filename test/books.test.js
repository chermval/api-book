const request = require('supertest')

const server = require('../server')

describe('books', () => {
    it('Get all books', async () => {
        const response = await request(server.callback()).get('/api/v1/books')
        expect(response.status).toEqual(200)
    })
})