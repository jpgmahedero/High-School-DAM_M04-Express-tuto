# NODE

## What is NODE
[Node](https://nodejs.org/en) (or more formally Node.js) is an open-source, cross-platform runtime environment
that allows developers to create all kinds of server-side tools and applications in JavaScript.

The runtime is intended for use **outside of a browser context** (i.e. running directly on a computer or server OS).
As such, the environment **omits browser-specific JavaScript APIs and adds support for more traditional OS APIs including HTTP and file system libraries**.

## What is Express
Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:

- Write **handlers for requests** with different **HTTP verbs** at different URL paths (**routes**).
- Integrate with **"view" rendering engines** in order to generate responses by inserting data into templates.
- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
- Add additional request processing **"middleware"** at any point within the request handling pipeline.


##  Creating a new application


First create a folder to host your application

```
$ mkdir demo-express
$ cd demo-express
```

The first step is to create the package.json file.
```
$ npm init -y
```

Then install the ExpressJS package and nodemon
```
$ npm install express
```

And start coding!

Here you have an ultra basic template. Open your web browser and point it to 
```angular2html
http://localhost:3000
```
```angular2html
const express = require("express")
const app = express()
app.get("/", function(req, res) {
    res.send("Hello World")
})
app.listen(3000)

```