# JAVASCRIPT  BASICS

- [Declaring data](#declaring-data): **var** vs **let** vs **const**
- [Arrow functions](#arrow-functions): modern way of declaring functions
- [Async and Await](#async-and-await): asynchronous propgraming
- [Module exports](#importing-and-creating-modules): modularizing code



## Declaring data

#### VAR: 
    define variables

 **scope**:
   - outside a function block: it  is available for use in the whole window.
   - inside a function block: it is available and can be accessed only within that function.

 **potential problems**:
  - redefining an **already define variable using _var_** can becoma a problem

#### LET:
    define variables

An improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).

**scope**:
- inside a function block: it is available and can be accessed only within that { } block.
example:

```angular2html
let a = 10;
function f() {
if (true) {
let b = 9

        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)
```
even if **b** has been defined **inside** a function, it can’t be accessible outside the particular code block

**potential problems**:
- redefining an **already define variable using _let_** is **NOT** allowed


### CONST
    define constants

const has all the properties that are the same as the let keyword, except the user **cannot update** it and have to assign it with a value at the time of declaration. These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.

**scope**:
- inside a function block: it is available and can be accessed only within that { } block.

| var                                                                           | let                                                                                        | const                                                                                          |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| The scope of a var variable is functional or global scope.                    | The scope of a let variable is block scope.                                                | The scope of a const variable is block scope.                                                  |
| It can be updated and re-declared in the same scope.                          | It can be updated but cannot be re-declared in the same scope.                             | It can neither be updated or re-declared in any scope.                                         |
| It can be declared without initialization.                                    | It can be declared without initialization.                                                 | It cannot be declared without initialization.                                                  |
| It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’.      | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| These variables are hoisted.                                                  | These variables are hoisted but stay in the temporal dead zone untill the initialization.  | These variables are hoisted but stays in the temporal dead zone until the initialization       |

*** 
## Arrow functions
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
-  Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
-   Arrow functions cannot use yield within their body and cannot be created as generator functions.

### syntax
```angular2html
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}

```



### Common use in express routes:

- Traditional way
```angular2html
app.get('/users', function(req, res) {
    // Logic to handle the request
    // users = ...
    res.json(users);
});
```

- Arrow functions (modern js) way

```
app.get('/users', (req, res)=> {
    // Logic to handle the request
    // sers = ...
    res.json(users);
});

```

***

## Async and Await

### async 

- The async keyword is used to declare an asynchronous function, which returns an implicit Promise as its result. 
- An async function can contain zero or more await expressions.

### await Keyword

- The await keyword is used inside an async function to pause the execution until the Promise is settled (either resolved or rejected).
- **It can only be used inside an async function.**
- When used with a Promise, it makes the asynchronous code look and behave like synchronous code.

### Usage in Express

```

const express = require('express');
const app = express();

app.get('/data', async (req, res) => {
    try {
        const data = await fetchData(); // Assume fetchData returns a Promise
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// This is a SLOW  function that would return a Promise
async function fetchData() {
    // ...fetch data (e.g., from a database or API)
}

app.listen(3000, () => console.log('Server is running on port 3000'));
```

In this example:

- The route handler for '/data' is an async function, allowing the use of await within it.
- await fetchData() pauses the execution of the async function until fetchData (which returns a Promise) is resolved or rejected.
- If the Promise resolves, the result is returned and execution continues.
- If the Promise is rejected, the error is caught by the try...catch block and an appropriate response is sent.

### Benefits of using async and await in Express:

1. Cleaner and more readable code, especially for handling asynchronous operations.
2. Error handling becomes straightforward with try...catch blocks.
3. Reduces the "callback hell" scenario that can occur with complex nested callbacks.

    #### Handling errors
    It's important to handle errors properly in async functions using try...catch blocks to ensure that the Express server can handle exceptions and not crash unexpectedly.
*** 
## Importing and creating modules



A module is a JavaScript library/file that you can import into other code using Node's require() function. 

Express itself is a module, as are the middleware and database libraries that we use in our Express applications.

The code below shows how we import a module by name, using the Express framework as an example. First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application. We can then access the properties and functions of the application object.

```angular2html
const express = require("express");
const app = express();
app.(...)

```

### creating your own modules
Create your own module helps modularizing your application as it becomes biggger

### Exporting in Express

In Express, you often create modules for routes, middleware, or utility functions. To make functions, objects, or primitives available to other files, you use module.exports or exports.

Example for encapsulating user routes into a **router**
```angular2html
// userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    // Handle GET request for the /users route
});

module.exports = router;

```

In this example, module.exports = router; makes the router available for import in other files.

### Importing in Express

To use the exported modules in another file, you use **require()** to import them.

Example: Importing an Express Router
```angular2html
// app.js
const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');

app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

All routes begginng with /api will be handled into user.js file. 

Sinc user.js is used with /api route /api/users route is the final route for handling GET requests for users 