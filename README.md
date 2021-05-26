# API BOOK
Node (Koajs) api rest book

## Install

### Requisites
    Node
    MongoDB

## Run the app

### Local/Dev
`npm run dev`
### Production
`npm run start`

## Run the test
`npm run test`

## Usage

| METHOD  | URI               | EXAMPLE               | 
|---------|-------------------|-----------------------|
| `GET`   | `/api/v1/healthcheck` |  http://localhost:3000/api/v1/healthcheck |
| `GET`   | `/api/v1/books/` |  http://localhost:3000/api/v1/books |
| `POST`   | `/api/v1/books/` |  http://localhost:3000/api/v1/books  -  body: `{ "title": "test", "description": "desc", "author": "author" }` | 
| `GET`   | `/api/v1/books/{id}` |  http://localhost:3000/api/v1/books/{id} |
| `DELETE`   | `/api/v1/books/{id}` |  http://localhost:3000/api/v1/books{id} |


