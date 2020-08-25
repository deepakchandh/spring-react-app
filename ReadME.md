 ## Spring React app

To run this app

 1. Clone the repository and unzip in your Spring Tool Suite
 2. Make sure MySQL is running in your system
 3. Next go to this src/main/resources/application.properties file and change your database name, username and password
 4. Once completed, run the spring boot app
 5. To run the react app, go the location src/main/webapp/reactjs and enter the command "npm start"
 6. Then go to http://localhost:3000/ you will get the page.


## Rest APIs

* GET - http://localhost:8080/api/v1/books/100

 **Response**

 {
    "id": 100,
    "title": "Spring microservice in action",
    "author": "john carnell",
    "coverPhotoURL": "iuiuyolkhk",
    "isbnNumber": 7987709099090,
    "price": 3222,
    "language": "English"
 }


* POST - http://localhost:8080/api/v1/books 
Header
Content-Type - application/json
 
 **input**
 
 {
        "id": 101,
        "title": "Spring in action",
        "author": "john carnell",
        "coverPhotoURL": "iuiuyolkhk",
        "isbnNumber": 7987709099090,
        "price": 3200,
        "language": "English"
 }

* GET - http://localhost:8080/api/v1/books 

 **Response**
 
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


* PUT - http://localhost:8080/api/v1/books

 **input**
 
 {
    "id": 102,
    "title": "Apache Kafka",
    "author": "john carnell",
    "coverPhotoURL": "iuiuyolkhk",
    "isbnNumber": 7987709099090,
    "price": 1000.00,
    "language": "English"
 }


* DELETE - http://localhost:8080/api/v1/books/<bookId>







