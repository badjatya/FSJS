# Q.9 How can you define default parameter values in ES6 functions?

In ES6 (ECMAScript 2015) and later versions of JavaScript, you can define default parameter values for function parameters. Default parameter values allow you to specify a default value that will be used if an argument is not provided or is `undefined` when invoking a function.

Here's how you can define default parameter values in ES6 functions:

```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!
```

In this example, the `greet()` function has a parameter named `name` with a default value of `'Guest'`. If no argument is passed when invoking the function or if `undefined` is explicitly passed, the default value `'Guest'` is used instead.

You can provide default values for multiple parameters as well:
```javascript
function calculateArea(length = 0, width = 0) {
  const area = length * width;
  console.log(`The area is ${area} square units.`);
}

calculateArea(); // Output: The area is 0 square units.
calculateArea(5, 3); // Output: The area is 15 square units.
```

In this example, the `calculateArea()` function has two parameters, `length` and `width`, both with default values of `0`. If no arguments are provided when invoking the function, the default values `0` are used.

Default parameter values can also be expressions or function calls:
```javascript
function multiply(a, b = 2 * a) {
  return a * b;
}

console.log(multiply(5)); // Output: 25 (b = 2 * 5 = 10)
console.log(multiply(3, 4)); // Output: 12 (b = 4, overrides default)
```

In this example, the default value of `b` is set to `2 * a`, so if only `a` is provided, `b` will be calculated accordingly.

It's important to note that default parameter values are only used when the corresponding argument is `undefined` or not provided. Other falsy values such as `null` or `false` will not trigger the default value.

Default parameter values are a useful feature that simplifies function invocation by providing sensible defaults when certain arguments are omitted. They enhance code readability and help avoid unnecessary conditional checks for missing or `undefined` values.