# Q.5 What is the difference between let and const ?

The main difference between `let` and `const` in JavaScript is in their assignment and reassignment behavior.

1. Assignment and Reassignment:
   - `let`: Variables declared with `let` can be assigned a value during declaration and can be reassigned later within their scope. This means that the variable can be updated or assigned a new value.
   - `const`: Variables declared with `const` must be assigned a value during declaration, and once assigned, their value cannot be changed or reassigned. They are considered constants or immutable variables.

Here's an example that demonstrates the difference:

```javascript
let x = 10;
x = 20; // Reassignment allowed with let

const y = 30;
y = 40; // Throws an error: Assignment to a constant variable
```

In this example, the variable `x` declared with `let` can be reassigned with a new value (`20`), whereas the variable `y` declared with `const` cannot be reassigned (`40`), resulting in a `TypeError` at runtime.

2. Scope:
   - Both `let` and `const` have block scope. They are accessible only within the nearest enclosing block (between `{}`) where they are declared.
   - Both `let` and `const` follow the principle of "temporal dead zone" (TDZ). They are not accessible before their declaration within the block scope.

3. Hoisting:
   - Variables declared with `let` and `const` are hoisted to the top of their respective blocks during the compilation phase, but they are not initialized. Accessing them before their declaration will result in a `ReferenceError`.

4. Declaration Requirement:
   - Variables declared with `let` can be declared without assigning them a value, and their value will be `undefined` until they are assigned a value explicitly.
   - Variables declared with `const` must be declared and assigned a value during declaration. If no value is assigned, it will result in a `SyntaxError`.

5. Object Mutability:
   - When using `const` to declare a variable that holds an object or an array, the object or array itself is not immutable. It means you can modify the properties or elements of the object or array, but you cannot reassign the variable to a completely new object or array.

```javascript
const person = { name: 'John' };
person.age = 30; // Valid: Modifying the property of the object

person = { name: 'Jane' }; // Throws an error: Assignment to a constant variable
```

In the example above, adding the `age` property to the `person` object is allowed, but attempting to reassign the `person` variable to a new object will throw an error.

In summary, `let` allows for variable reassignment and is suitable for variables whose value may change over time. On the other hand, `const` enforces immutability and is appropriate for variables that should remain constant throughout their scope.