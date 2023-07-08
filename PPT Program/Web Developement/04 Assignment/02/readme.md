# Q.2 Explain Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when variables declared with `let` and `const` are not accessible before their declarations within their lexical scope. During this phase, accessing such variables results in a `ReferenceError`.

The TDZ concept was introduced to address some of the issues with hoisting and to enforce block scope in JavaScript. Unlike variables declared with `var`, which are hoisted to the top of their scope and can be accessed with the value `undefined` before their declaration, variables declared with `let` and `const` remain inaccessible until their actual declaration.

Here's an example to illustrate the Temporal Dead Zone:

```javascript
console.log(x); // Throws a ReferenceError
let x = 10;
```

In this example, the variable `x` is declared using `let`, but when we try to access it before its declaration, it throws a `ReferenceError`. This is because the access occurs within the TDZ, which extends from the start of the scope until the actual declaration of the variable. Only after the variable declaration line `let x = 10;` is encountered, `x` becomes accessible.

The Temporal Dead Zone also applies to function-scoped variables declared with `const` and `let`:

```javascript
function example() {
  console.log(y); // Throws a ReferenceError
  let y = 20;
}
example();
```

In this case, the variable `y` is declared with `let` inside the function `example()`. Trying to access it before its declaration results in a `ReferenceError` because it is still in the TDZ.

It's worth noting that hoisting still occurs for variables declared with `let` and `const`, but their accessibility is limited within the TDZ until their actual declarations. This behavior helps catch potential issues caused by accessing variables before they are assigned a value.

Understanding the Temporal Dead Zone is important for writing correct and predictable JavaScript code. It encourages proper variable declaration and promotes block scoping, which can help avoid bugs and improve code readability.