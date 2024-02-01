# What is an API?

API stands for Application Programming Interface.
program that can be used by another program, in order to allow applications to communicate with each other.

An API allows the server and the client to communicate with each other and exchange information.

## HTTP requests

The action you want to take on the specified resource. Although nouns are also encountered, these methods are often referred to as HTTP verbs.
Here are the most commonly used HTTP verbs / actions

- GET: GET requests are only used to **retrieve** data.

- POST: GET requests are used to **send** new data.

- PUT: PUT requests are used to **modify** data.

- PATCH: PATCH requests are used to **partially modify** data.

- DELETE: DELETE requests **deletes** the specified data.

## REST architecture and CRUD routes conventions

**REST** is a set of standards for creating an API that both client and server will use. 

One of those REST conventions is how routes are defined. There are standards for each CRUD course of action.

**CRUD** stands for **C**reate, **R**ead, **U**pdate, and **D**elete.

When we are dealing with an API resource. For example Customer. Each Client resource has its own CRUD routes.

Here is an example of these REST CRUD routes:

- Create: POST http://www.example.com/customers

- Read: GET http://www.example.com/customers/3814

- Update: PUT http://www.example.com/customers/3814

- Destroy: DELETE http://www.example.com/customer/3814

Another simpler exmample
3. Create: POST http://www.example.com/customers
...inserts  **new** customer

- Read: GET http://www.example.com/customers/3814

- Update: PUT http://www.example.com/customers/3814

- Destroy: DELETE http://www.example.com/customer/3814