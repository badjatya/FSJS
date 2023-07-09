# Q.3 Explain SetTimeOut and setInterval ?

`setTimeout` and `setInterval` are functions in JavaScript used for scheduling the execution of code at a later time or repeatedly over a specified interval. They are part of the Web API provided by web browsers.

1. setTimeout:
   - The `setTimeout` function allows you to execute a specified block of code or a function after a specified delay (in milliseconds).
   - It takes two arguments: a callback function or code to execute, and the delay (in milliseconds) before execution.
   - The `setTimeout` function returns a unique identifier (timeout ID) that can be used to cancel the scheduled execution using the `clearTimeout` function.
   ```javascript
   const timeoutId = setTimeout(() => {
     console.log('Delayed execution');
   }, 2000);
   ```
   In this example, the callback function will be executed after a delay of 2000 milliseconds (2 seconds). The timeout ID returned by `setTimeout` can be used to cancel the execution using `clearTimeout(timeoutId)`.

2. setInterval:
   - The `setInterval` function allows you to repeatedly execute a specified block of code or a function at a specified interval.
   - It takes two arguments: a callback function or code to execute, and the interval (in milliseconds) between each execution.
   - The `setInterval` function returns a unique identifier (interval ID) that can be used to cancel the repeated execution using the `clearInterval` function.
   ```javascript
   const intervalId = setInterval(() => {
     console.log('Repeated execution');
   }, 1000);
   ```
   In this example, the callback function will be executed every 1000 milliseconds (1 second) in an infinite loop. The interval ID returned by `setInterval` can be used to cancel the execution using `clearInterval(intervalId)`.

It's important to note that both `setTimeout` and `setInterval` are asynchronous functions. They schedule the execution of code, allowing other code to continue running without waiting for the scheduled code to finish.

Using `setTimeout` and `setInterval`, you can create time-based animations, implement timed events, periodically update data, or add delays between consecutive actions in your JavaScript applications.

It's good practice to properly handle cleanup by canceling any pending timeouts or intervals when they are no longer needed to avoid unnecessary executions and potential memory leaks.