# Q.6  What is template literals in ES6 and how do you use them?

Template literals, introduced in ECMAScript 6 (ES6), provide an enhanced way to work with strings in JavaScript. They allow for the embedding of expressions and multiline strings using a more readable and flexible syntax. Template literals are created using backticks (` `) as delimiters.

To use template literals, you enclose the string content within backticks. Within the template literal, you can include placeholders `${expression}` to interpolate and embed JavaScript expressions.

Here's an example to illustrate the usage of template literals:

```javascript
const name = 'John';
const age = 30;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
```

In this example, the template literal is assigned to the `greeting` variable. The placeholders `${name}` and `${age}` are used to interpolate the values of the `name` and `age` variables within the string. When the `greeting` is logged to the console, it will display the interpolated values:

```
Hello, my name is John and I am 30 years old.
```

Template literals also support multiline strings without the need for manual line breaks using escape characters. This makes it easier to work with strings that span multiple lines:

```javascript
const message = `This is a multiline
string using
template literals.`;
console.log(message);
```

The output of the `message` will preserve the line breaks as defined within the template literal:

```
This is a multiline
string using
template literals.
```

Additionally, template literals can include expressions and function calls within the placeholders. This allows for more complex operations and dynamic string construction:

```javascript
const a = 10;
const b = 5;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);
```

In this example, the expression `${a + b}` is evaluated and the sum of `a` and `b` is interpolated within the template literal:

```
The sum of 10 and 5 is 15.
```

Template literals provide a more convenient and expressive way to work with strings in JavaScript, especially when dealing with variable interpolation, multiline strings, or complex string constructions involving expressions or function calls.