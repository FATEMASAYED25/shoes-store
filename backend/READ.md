## API Endpoints

#### Login

- POST "api/users/login" Send username and password to get an authentication token.

#### Register

- POST "api/register" () Create a new user by sending its username & email & fristname & lastname & password & phone & address & city.

#### Categories

- Get "api/categories" (Required Authorization Header (admin only)) git list of all categories.

- Get "api/categories/:id" (Required Authorization Header (admin only)) git specific categories by id.

- POST "api/categories" (Required Authorization Header (admin only)) Create a new categories by sending its name.

- DELETE "api/categories/:id" (Required Authorization Header (admin only)) Remove a specific categories by id.

#### Products

- Get "api/products" (Required Authorization Header) git list of all products.

- Get "api/products/:id" (Required Authorization Header) git specific product by id.

- POST "api/products" (Required Authorization Header (admin only)) Create a new product by sending its name & category_id & description & quantity & price and images (multipart/form-data).

- DELETE "api/products/:id" (Required Authorization Header (admin only)) Remove a specific product by id.

- POST "api/products/:id/reviews" (Required Authorization Header (users only)) Create a new review for product by sending its id & name & comment & rating.

#### Users

- GET "api/users" (Required Authorization Header (admin only)) git list of all the users.

- Get "api/users/:id" (Required Authorization Header (now for user only)) git specific user by id.

- PUT "api/users/mine" (Required Authorization Header (now for user only)) user update his informations.

- POST "api/users" (Required Authorization Header (admin only)) Create a new user by sending its username & email & role (user or admin) & fristname & lastname & password & phone & address & city.

- DELETE "api/users/:id" (Required Authorization Header (admin only)) Remove a specific user by id.

#### Orders

- Get "/orders" (Required Authorization Header (admin only)) git list of all orders.

- Get "/orders/mine" (Required Authorization Header (user only)) git all order for user authenticated.

- Get "/orders/:id" (Required Authorization Header (admin only)) git specific order by id.

- POST "/orders" (Required Authorization Header (user only)) Create a new order by sending its order_name & order_address & order_phone and order_city.

- POST "/orders/:id/products" (Required Authorization Header (user only)) Add product to a specific order by sending id & name & product_id and quantity

- PUT "/orders/:id/payment" (Required Authorization Header (user only)) user pay for his order by sending its fullName & cardNumber & month & year and cvv.

- DELETE "/orders/:id" (Required Authorization Header) Remove a specific order by id.

## Database Schema

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR,
email VARCHAR,
role ENUM(user, admin) => default = user
firstname VARCHAR,
lastname VARCHAR,
password VARCHAR,
phone VARCHAR,
address VARCHAR,
city VARCHAR
);

CREATE TABLE categories (
id SERIAL PRIMARY KEY,
name VARCHAR,
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
category_id REFERENECS categories(id)
name VARCHAR,
description VARCHAR,
price DECIMAL,
quantity INT,
rating FLOAT,
num_reviews INT
);

CREAT TABLE images (
id SERIAL PRIMARY KEY,
path VARCHAR,
product_id REFERENCES products(id)
)

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
is_paid BOOLEAN default = false,
paid_at DATE,
is_delivered BOOLEAN default = false,
delivered_at DATE,
user_id bigint REFERENCES users(id),
order_name VARCHAR,
order_address VARCHAR,
order_phone VARCHAR,
order_city VARCHAR
);

CREATE TABLE order_products (
id SERIAL PRIMARY KEY,
quantity INT,
price DECIMAL,
order_id bigint REFERENCES orders(id),
product_id bigint REFERENCES products(id)
);

## Data Shapes

### Category

- id
- name

#### Product

- id SERIAL
- category_id
- name
- description
- price
- quantity
- rating
- num_reviews

#### User

- id SERIAL
- username
- email
- role
- firstname
- lastname
- password
- phone
- address
- city

#### Orders

- id SERIAL PRIMARY KEY,
- user_id
- order_name
- order_address
- order_phone
- order_city
- is_paid
- pait_at
- is_delivered
- delivered_at

### Order_products

- id
- product_id
- order_id
- quantity
- price
