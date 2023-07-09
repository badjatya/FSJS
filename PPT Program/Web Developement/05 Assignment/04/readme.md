# Q.4 how can you handle Async code in JavaScript ?

Asynchronous code in JavaScript can be handled using various approaches, including callbacks, promises, and async/await. These techniques allow you to manage asynchronous operations, handle their results, and ensure proper sequencing and error handling.

1. Callbacks:
   - Callbacks are the traditional approach for handling asynchronous code in JavaScript.
   - A callback function is passed as an argument to an asynchronous function, which is executed once the operation is complete.
   - Callbacks can be nested, leading to a pattern known as "callback hell" or "pyramid of doom," which can make code difficult to read and maintain.
   ```javascript
   function fetchData(callback) {
     setTimeout(() => {
       const data = 'Async data';
       callback(data);
     }, 2000);
   }

   function handleData(data) {
     console.log(data);
   }

   fetchData(handleData);
   ```

2. Promises:
   - Promises provide a more structured and readable way to handle asynchronous code.
   - A promise represents the result of an asynchronous operation, which can be in one of three states: pending, fulfilled, or rejected.
   - Promises can be chained using `.then()` and `.catch()` to handle success and error cases, respectively.
   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const data = 'Async data';
         resolve(data);
       }, 2000);
     });
   }

   fetchData()
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error(error);
     });
   ```

3. Async/await:
   - Async/await is a syntactic improvement introduced in ES2017 (ES8) that builds on top of promises.
   - The `async` keyword is used to define an asynchronous function, and the `await` keyword is used to pause the execution of the function until a promise is resolved or rejected.
   - Async/await provides a more sequential and synchronous-like coding style for handling asynchronous operations.
   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const data = 'Async data';
         resolve(data);
       }, 2000);
     });
   }

   async function handleData() {
     try {
       const data = await fetchData();
       console.log(data);
     } catch (error) {
       console.error(error);
     }
   }

   handleData();
   ```

Each of these approaches—callbacks, promises, and async/await—provides a way to handle asynchronous code in JavaScript. Promises and async/await are recommended for their improved readability, error handling, and sequential execution style. They help avoid the complexities of callback-based code and make asynchronous operations easier to manage and reason about.