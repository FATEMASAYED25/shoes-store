## shoes Ecommerce - Overview

---

### The challenge:

This project is an E-Commerce Web App as a graduation project from the Job Placement Program by Sprints as part of [egFWD scholarship](https://egfwd.com/)

The E-Commerce app has two types of users:

```
- **User**: can browse products, add to cart and make orders
- **Admin**: can perform CRUD operations on products, categories, brands, change order status and view bussiness statistics
  you can login to admin account by entre admin as a username and superadmin as a password
```

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

---

## Prerequisites

You need the following modules and dependencies installed to run this project:

- node # To run the application
- npm # For dependency management

---

---

## Installing locally on your system

Simply, run the following command to install the project dependencies:

```
$ npm install
```

---

## Running the application

Use the following command to run the application in using node:

```
$ npm run start
```

---

## Available backages in this project -----dependencies -----

1/ "react-router-dom": "^6.2.1",
2/ "react-icons": "^4.3.1",
3/ "@fortawesome/free-solid-svg-icons": "^5.15.4",
4/ "@fortawesome/react-fontawesome": "^0.1.16",
5/ "react-bootstrap": "^2.1.1",
6/ "bootstrap": "^5.1.3",
7/ "axios": "^0.25.0",
8/ "react-multi-carousel"
9/ "react-use-cart"

---

# Runing backend Local

## Installing locally on your system

From the root of the repo, navigate backend folder cd backend.
Then run the following command to install the project dependencies:

```
$ npm install
```

---

## Setup environment

First, create a .env file with all the required environment variables:

```
- DB_PASSWORD=""
- DB_USERNAME=""
- DB_DATABASE=""
- DB_HOST=""
- SALT_ROUNDS=""
- JWT_SECRET=""
- secret_key="" =>from you'r account in stripe to apply payment
```

---

## Next, start the Postgres

create database:

```
$ create database "name_db";
```

Next, you need to run the database migrations:

```
$ npm run migrate
```

Now, database run on port 5432.

---

## Running the application

Use the following command to run the application in using node:

```
$ npm run start
```

---

The application will run on http://localhost:3001/api.

---

## **Built With**

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [**Node.js**](https://nodejs.org/en/about/)
- - [Sequelize](https://www.npmjs.com/package/sequelize)
- - [Express.js](https://www.npmjs.com/package/express)
- [**Visual Studio Code**](https://code.visualstudio.com/)

---
