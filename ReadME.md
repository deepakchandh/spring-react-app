GET - http://localhost:8080/api/v1/books/100

{
    "id": 100,
    "title": "Spring microservice in action",
    "author": "john carnell",
    "coverPhotoURL": "iuiuyolkhk",
    "isbnNumber": 7987709099090,
    "price": 3222,
    "language": "English"
}


POST - http://localhost:8080/api/v1/books 
Header
Content-Type - application/json

{
        "id": 101,
        "title": "Spring in action",
        "author": "john carnell",
        "coverPhotoURL": "iuiuyolkhk",
        "isbnNumber": 7987709099090,
        "price": 3200,
        "language": "English"
}

GET - http://localhost:8080/api/v1/books 

[
    {
        "id": 100,
        "title": "Spring microservice in action",
        "author": "john carnell",
        "coverPhotoURL": "iuiuyolkhk",
        "isbnNumber": 7987709099090,
        "price": 3222,
        "language": "English"
    },
    {
        "id": 101,
        "title": "Spring microservice in action",
        "author": "john carnell",
        "coverPhotoURL": "iuiuyolkhk",
        "isbnNumber": 7987709099090,
        "price": 3222,
        "language": "English"
    },
    {
        "id": 102,
        "title": "Spring in action",
        "author": "john carnell",
        "coverPhotoURL": "iuiuyolkhk",
        "isbnNumber": 7987709099090,
        "price": 3200,
        "language": "English"
    }
]


PUT - http://localhost:8080/api/v1/books

{
    "id": 102,
    "title": "Apache Kafka",
    "author": "john carnell",
    "coverPhotoURL": "iuiuyolkhk",
    "isbnNumber": 7987709099090,
    "price": 1000.00,
    "language": "English"
}


DELETE - http://localhost:8080/api/v1/books/<bookId>







