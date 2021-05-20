const request = require('supertest')

const server = require('../server')

describe('books', () => {
    it('Get all books', async () => {
        const response = await request(server.callback()).get('/api/v1/books')
        expect(response.status).toEqual(200)
    })

    it('Post save book', async () => {
        const response = await request(server.callback())
        .post('/api/v1/books')
        .send({
            title: 'book',
            description: 'desc',
            author: 'author',  
        })

        expect(response.status).toEqual(201)
    })
})