# Q.3 Difference between var & let?

The main differences between `var` and `let` in JavaScript relate to scoping, hoisting, and redeclaration.

1. Scoping: Variables declared with `var` have function scope or global scope, meaning they are accessible throughout the entire function or global scope. On the other hand, variables declared with `let` have block scope, which means they are limited in scope to the nearest enclosing block (typically within curly braces `{}`). Block scope allows for more fine-grained control over variable visibility and helps prevent unintended variable access or modification.

2. Hoisting: Variables declared with `var` are hoisted to the top of their scope during the compilation phase, which means they can be accessed (with the value `undefined`) before their actual declaration in the code. This can sometimes lead to confusion and potential bugs. In contrast, variables declared with `let` are also hoisted, but they are not accessible (resulting in a `ReferenceError`) until their declaration statement is encountered during the execution phase. This behavior is known as the Temporal Dead Zone (TDZ) and helps enforce proper variable initialization.

3. Redeclaration: Variables declared with `var` can be redeclared within the same scope without throwing an error. This can lead to accidental variable reassignment and potential bugs. On the other hand, variables declared with `let` cannot be redeclared within the same scope. If you attempt to redeclare a `let` variable within the same block, it will result in a `SyntaxError`.

Here's an example illustrating the differences:

```javascript
function example() {
  var x = 10;
  let y = 20;

  if (true) {
    var x = 30; // Redeclaration of 'x' (same scope), updates the value
    let y = 40; // New block scope, separate variable 'y'

    console.log(x); // Output: 30
    console.log(y); // Output: 40
  }

  console.log(x); // Output: 30
  console.log(y); // Output: 20 (original 'y' value, not affected by the block)
}

example();
```

In this example, the `var` variable `x` can be redeclared within the same scope (the function scope), which updates its value. However, the `let` variable `y` has block scope, so the redeclaration within the `if` block creates a new variable `y` that exists only within that block, not affecting the outer variable `y`.

Overall, using `let` instead of `var` provides more predictable scoping behavior, helps prevent variable redeclaration errors, and encourages better coding practices. It is generally recommended to use `let` (or `const` for immutable values) over `var` in modern JavaScript code.