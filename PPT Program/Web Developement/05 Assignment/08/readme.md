# Q.8 Explain Purpose of Try and Catch Block & Why do we need it?

The `try` and `catch` blocks in JavaScript are used for error handling and exception handling. They allow you to catch and handle errors that occur during the execution of your code. The purpose of the `try-catch` block is to provide a mechanism to gracefully handle and recover from errors, preventing them from causing abrupt program termination.

Here's how the `try-catch` block works:

1. `try` Block:
   - The `try` block contains the code that you want to monitor for errors. It encloses the portion of code where an exception might occur.
   - If an error occurs within the `try` block, the normal flow of execution is interrupted, and control is transferred to the nearest `catch` block.

2. `catch` Block:
   - The `catch` block follows the `try` block and specifies the code to be executed when an exception is thrown in the `try` block.
   - It accepts an error object (also known as an exception) as a parameter, which represents the error that occurred.
   - The `catch` block provides an opportunity to handle the error, log useful information, display user-friendly error messages, or take any necessary actions to recover from the error.
   - After executing the `catch` block, the program continues its execution normally.

Here's an example that demonstrates the usage of `try-catch`:

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed. / null
```

In this example, the `divide` function attempts to divide two numbers `a` and `b`. If `b` is zero, it throws an error using the `throw` statement. The error is then caught in the `catch` block, and an error message is logged to the console. The function returns `null` to indicate that an error occurred.

The `try-catch` block is essential for proper error handling and preventing unexpected termination of programs. It allows you to anticipate and handle errors in a controlled manner, providing an opportunity to recover from exceptional situations. By handling errors gracefully, you can improve the robustness and stability of your code, enhance user experience, and make troubleshooting and debugging more efficient.