# Q.3 What’s Call Apply Bind Method & Difference Between them

In JavaScript, `call()`, `apply()`, and `bind()` are methods that allow you to set the value of `this` and invoke a function with a specified context. They provide a way to explicitly control the execution context of a function.

Here's an explanation of each method and their differences:

1. `call()` method:
   - The `call()` method is a function method that allows you to call a function with a specified `this` value and individual arguments passed as comma-separated values.
   - It invokes the function immediately.
   - The first argument of `call()` is the value to be used as `this`, and subsequent arguments are passed as separate arguments to the function.
   ```javascript
   function greet(message) {
     console.log(message + ', ' + this.name);
   }

   const person = { name: 'John' };
   greet.call(person, 'Hello');
   ```

2. `apply()` method:
   - The `apply()` method is similar to `call()`, but it accepts the `this` value as the first argument and an array-like object or an array of arguments as the second argument.
   - It invokes the function immediately.
   - The first argument of `apply()` is the value to be used as `this`, and the second argument is an array-like object or an array containing the arguments to be passed to the function.
   ```javascript
   function greet(message) {
     console.log(message + ', ' + this.name);
   }

   const person = { name: 'John' };
   greet.apply(person, ['Hello']);
   ```

3. `bind()` method:
   - The `bind()` method returns a new function with a specified `this` value and any number of initial arguments.
   - Unlike `call()` and `apply()`, `bind()` does not immediately invoke the function but instead returns a new function that can be called later.
   - It is useful when you want to create a new function with a fixed context and possibly some initial arguments.
   ```javascript
   function greet(message) {
     console.log(message + ', ' + this.name);
   }

   const person = { name: 'John' };
   const greetPerson = greet.bind(person, 'Hello');
   greetPerson();
   ```

The main difference between `call()` and `apply()` is the way arguments are passed. `call()` takes individual arguments, while `apply()` accepts an array-like object or an array of arguments.

The difference between `bind()` and the other two methods is that `bind()` returns a new function with the specified context and any initial arguments, but does not invoke the function immediately. The returned function can be invoked later.

These methods allow you to explicitly set the `this` value of a function, which is especially useful when working with functions that are methods of objects or when you want to create a new function with a fixed context.