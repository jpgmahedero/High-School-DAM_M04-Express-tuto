# JAVASCRIPT  BASICS
## Declaring data: using var vs let vs const
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

| var                                                                           | let                                                                                        | const                                                                                          |   |   |   |   |   |   |   |
|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---|---|---|---|---|---|---|
| The scope of a var variable is functional or global scope.                    | The scope of a let variable is block scope.                                                | The scope of a const variable is block scope.                                                  |   |   |   |   |   |   |   |
| It can be updated and re-declared in the same scope.                          | It can be updated but cannot be re-declared in the same scope.                             | It can neither be updated or re-declared in any scope.                                         |   |   |   |   |   |   |   |
| It can be declared without initialization.                                    | It can be declared without initialization.                                                 | It cannot be declared without initialization.                                                  |   |   |   |   |   |   |   |
| It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’.      | It cannot be accessed without initialization, as it cannot be declared without initialization. |   |   |   |   |   |   |   |
| These variables are hoisted.                                                  | These variables are hoisted but stay in the temporal dead zone untill the initialization.  | These variables are hoisted but stays in the temporal dead zone until the initialization       |   |   |   |   |   |   |   |

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
## Async and Await

## Module exports