# API BOOK
KoaJS api rest book

## Install

### Requisites
- Node
- MongoDB

```bash
npm i
```

## Run the apps

### Dev
```bash
npm run dev
```

### Production
```bash
npm run start
```

## Run the test
```bash
npm run test
```

## Usage

| ACTION | METHOD  | URI               | EXAMPLE               | 
|--------|---------|-------------------|-----------------------|
| Validate health of api | `GET`   | `/api/v1/healthcheck` |  http://localhost:3000/api/v1/healthcheck |
| Get all books | `GET`   | `/api/v1/books/` |  http://localhost:3000/api/v1/books |
| Create book | `POST`   | `/api/v1/books/` |  http://localhost:3000/api/v1/books  -  body: `{ "title": "test", "description": "desc", "author": "author" }` | 
| Get a book by id | `GET`   | `/api/v1/books/{id}` |  http://localhost:3000/api/v1/books/{id} [1] |
| Delete a book by id | `DELETE`   | `/api/v1/books/{id}` |  http://localhost:3000/api/v1/books/{id} [1] |  
| Update data from book by id | `PUT`   | `/api/v1/books/{id}` |  http://localhost:3000/api/v1/books{id} [1] |

[1]: replace `{id}` for existing id value in DB
