# Q.1 Explain Hoisting in JavaScript

Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in the code, they are conceptually "hoisted" to the top of their respective scopes.

In the case of variable hoisting, only the declaration is moved to the top, not the initialization. This means that the variable is accessible (with the value `undefined`) from the beginning of its scope until the point where it is actually assigned a value.

Here's an example to illustrate variable hoisting:

```javascript
console.log(x); // Output: undefined
var x = 10;
```

In this example, the variable `x` is hoisted to the top of its scope (in this case, the global scope). During the hoisting process, the declaration `var x` is moved to the top, so the `console.log(x)` line doesn't throw an error. However, at this point, `x` is still `undefined` because the assignment `x = 10` is not hoisted.

Hoisting also applies to function declarations. Function declarations are entirely hoisted, including both the name and the function body. This means that you can invoke a function before it is declared in the code.

Here's an example of function hoisting:

```javascript
sayHello(); // Output: "Hello"

function sayHello() {
  console.log("Hello");
}
```

In this case, the function declaration `function sayHello()` is hoisted to the top, allowing us to call `sayHello()` before its actual declaration in the code.

It's important to note that hoisting applies only to declarations, not to initializations or assignments done in separate lines. It's considered a best practice to declare variables at the top of their scope to avoid confusion and potential issues caused by hoisting. Additionally, function expressions (functions assigned to variables) are not hoisted and behave like regular variable assignments.

Understanding hoisting in JavaScript can help in avoiding potential bugs and improve code readability by following best practices for variable and function declarations within their appropriate scopes.