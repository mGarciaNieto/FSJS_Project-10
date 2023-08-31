# FSJS_Project-9_REST-API
The nineth of ten projects for the Full Stack JavaScript Techdegree program at TreeHouse.

## Project Overview

For this project, I've created a REST API using Express. This API provides a way to administer a school database containing information about users and courses. Users can interact with the database to create new courses, retrieve information on existing courses, and update or delete existing courses. To make changes to the database, users will be required to log in so the API will also allow users to create a new account or retrieve information on an existing account.

In my upcoming final project, I will use React to create a front-end client that uses this REST API as a part of a full-stack JavaScript application.

To complete this project, I've used my knowledge of Node.js, Express, REST APIS, and Sequelize. To test the application, I've used Postman, a popular application for exploring and testing REST APIs.

## Extra credit

- **Ensure User Email Address is Valid and Unique**
  - Add validation to the `emailAddress` attribute in the `User` model to ensure that the provided email address is properly formatted.
  - Add the `unique` constraint to the `User` model to ensure that the provided email address isn't already associated with an existing user.

- **Update the User Routes**
  - Update the `/api/users` `GET` route so that the following properties are filtered out of the response: 
    - `password`
    - `createdAt`
    - `updatedAt`
    - Ensure that `id`, `firstName`, `lastName` and `email` are still included in the response

  - Update the `/api/users` `POST` route to check for and handle `SequelizeUniqueConstraintError` errors.
    - If a `SequelizeUniqueConstraintError` is thrown a `400` HTTP status code and an error message should be returned.

- **Update the Course Routes**
  - Update the `/api/courses` and `/api/courses/:id` `GET` routes so that the following properties are filtered out of the response: 
    - `createdAt`
    - `updatedAt`
  - Update the `/api/courses/:id` `PUT` and `/api/courses/:id` `DELETE` routes to ensure that the currently authenticated user is the owner of the requested course. 
    - If the currently authenticated user is not the owner of the requested course a `403` HTTP status code should be returned. 

## To run the project
**First**, install the project dependencies:
  `npm install`

**Next**, create the database and seed it with initial data:
  `npm run seed`

**Finally**, launch the application:
  `npm start`

**Verify the deployment by navigating to your server address in
your preferred browser**

http://localhost:5000

or

```sh
127.0.0.1:5000
```

##

> **Grade**: ready for marking
