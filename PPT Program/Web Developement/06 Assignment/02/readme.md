# Q.2 Explain This Keyword and Its Purpose?

The `this` keyword in JavaScript refers to the context within which a function is executed or an object is accessed. It is a special identifier that allows you to access properties and methods of the current object or the object to which a function belongs.

The purpose of the `this` keyword is to provide a way to refer to the current object dynamically, allowing functions to be reused with different objects or within different execution contexts.

The value of `this` depends on how a function is called:

1. Global Context:
   - In the global scope (outside any function), `this` refers to the global object. In a browser environment, it refers to the `window` object.
   ```javascript
   console.log(this); // Output: Window object (in browser)
   ```

2. Object Method:
   - When a function is called as a method of an object, `this` refers to the object on which the method is invoked.
   ```javascript
   const person = {
     name: 'John',
     sayHello: function() {
       console.log('Hello, ' + this.name);
     }
   };

   person.sayHello(); // Output: Hello, John
   ```

3. Constructor:
   - When a function is used as a constructor to create objects using the `new` keyword, `this` refers to the newly created object.
   ```javascript
   function Person(name) {
     this.name = name;
   }

   const john = new Person('John');
   console.log(john.name); // Output: John
   ```

4. Event Handler:
   - In an event handler function, such as an `onclick` handler, `this` typically refers to the element on which the event occurred.
   ```html
   <button onclick="console.log(this)">Click me</button>
   ```

The value of `this` is dynamically determined at runtime based on the context in which the function is invoked. It allows functions to access and operate on the properties and methods of the current object or the object to which they belong.

It's important to note that the value of `this` can be affected by various factors, such as the use of arrow functions, explicit binding using `call()` or `apply()`, or when using methods like `bind()`. Understanding the context and usage of `this` is crucial to properly accessing and manipulating object properties and ensuring correct behavior in your JavaScript code.