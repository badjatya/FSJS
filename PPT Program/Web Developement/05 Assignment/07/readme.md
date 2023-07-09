# Q.7 What’s async & await Keyword in JavaScript

The `async` and `await` keywords in JavaScript are used together to simplify asynchronous code and make it appear more synchronous and easier to read and understand. They were introduced in ES2017 (ES8) and provide a syntactical improvement over using promises and callbacks.

1. `async` Keyword:
   - The `async` keyword is used to define an asynchronous function. It declares that the function will operate asynchronously and will always return a promise.
   - Within an async function, you can use the `await` keyword to pause the execution of the function until a promise is resolved or rejected.
   - Async functions can contain multiple `await` statements and perform sequential asynchronous operations in a more readable manner.
   ```javascript
   async function fetchData() {
     const response = await fetch('https://api.example.com/data');
     const data = await response.json();
     return data;
   }
   ```

2. `await` Keyword:
   - The `await` keyword can only be used inside an async function.
   - It pauses the execution of the async function until the promise it awaits is fulfilled or rejected.
   - When awaiting a promise, the value resolved by the promise is returned, allowing you to assign it to a variable or use it in subsequent code.
   - If the awaited promise is rejected, an exception is thrown, which can be caught using a try-catch block.
   ```javascript
   async function fetchUserDetails(userId) {
     try {
       const response = await getUserDetails(userId);
       return response.data;
     } catch (error) {
       console.error('Error fetching user details:', error);
     }
   }
   ```

Using the `async` and `await` keywords, asynchronous code can be written in a more linear and synchronous-looking style, avoiding the need for extensive chaining of `.then()` or multiple levels of callbacks.

It's important to note that `await` can only be used with promises (or other values that behave like promises). If a non-promise value is passed to `await`, it is automatically wrapped in a resolved promise.

Async/await is especially useful when dealing with complex asynchronous operations, such as making multiple dependent API calls, performing I/O operations, or handling data dependencies. It improves code readability, reduces callback nesting, and simplifies error handling within asynchronous code.