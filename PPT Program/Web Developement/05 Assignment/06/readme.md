# Q.6 What are Promises & Explain Some Three Methods of Promise

Promises are objects in JavaScript introduced in ES6 (ECMAScript 2015) to handle asynchronous operations in a more structured and manageable way. They represent the eventual completion or failure of an asynchronous operation and provide a more readable and sequential syntax for handling asynchronous code compared to traditional callbacks.

Promises have three states:
1. Pending: The initial state when the promise is created, and the asynchronous operation is still in progress.
2. Fulfilled: The state when the asynchronous operation is successfully completed, and the promise is resolved with a value.
3. Rejected: The state when an error or failure occurs during the asynchronous operation, and the promise is rejected with a reason or error object.

Promises provide several methods to handle the result of the asynchronous operation:

1. `then()` method:
   - The `then()` method is used to handle the fulfillment of a promise and receive the resolved value.
   - It takes two optional arguments: a callback function to handle the resolved value and another callback function to handle any errors that occur during the fulfillment process.
   ```javascript
   asyncFunction()
     .then((result) => {
       // Handle the resolved value
       console.log(result);
     })
     .catch((error) => {
       // Handle any errors
       console.error(error);
     });
   ```

2. `catch()` method:
   - The `catch()` method is used to handle the rejection of a promise and receive the reason or error object.
   - It is similar to the error callback passed to `then()`, but it is dedicated solely to handling errors.
   ```javascript
   asyncFunction()
     .then((result) => {
       // Handle the resolved value
       console.log(result);
     })
     .catch((error) => {
       // Handle any errors
       console.error(error);
     });
   ```

3. `finally()` method:
   - The `finally()` method is used to specify a callback function that will be executed regardless of whether the promise is fulfilled or rejected.
   - It allows you to perform cleanup operations or execute code that should run in either case.
   ```javascript
   asyncFunction()
     .then((result) => {
       // Handle the resolved value
       console.log(result);
     })
     .catch((error) => {
       // Handle any errors
       console.error(error);
     })
     .finally(() => {
       // Execute code regardless of fulfillment or rejection
       console.log('Promise complete');
     });
   ```

These are some of the methods available for working with promises. Promises provide a more structured and readable way to handle asynchronous code by separating the success and error handling logic. They allow for chaining of multiple asynchronous operations and provide better error propagation and handling compared to traditional callback-based code.