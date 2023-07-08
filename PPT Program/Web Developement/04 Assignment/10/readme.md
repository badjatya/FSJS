# Q.10 What is the purpose of the spread operator (...) in ES6?

The spread operator (`...`) in ES6 (ECMAScript 2015) serves multiple purposes and provides a concise syntax for working with arrays, objects, and function arguments.

1. Array Spread:
   - The spread operator can be used to expand an array into individual elements. It allows you to create a new array by combining the elements of an existing array or use array elements as individual function arguments.
   ```javascript
   const arr = [1, 2, 3];
   const newArr = [...arr, 4, 5]; // Combining arrays

   console.log(newArr); // Output: [1, 2, 3, 4, 5]
   ```

2. Object Spread:
   - The spread operator can also be used to create a new object by merging the properties of existing objects or to create a shallow copy of an object.
   ```javascript
   const obj1 = { foo: 'bar' };
   const obj2 = { baz: 'qux' };

   const newObj = { ...obj1, ...obj2 }; // Merging objects

   console.log(newObj); // Output: { foo: 'bar', baz: 'qux' }
   ```

3. Function Arguments:
   - The spread operator can be used to pass an array as individual arguments to a function.
   ```javascript
   function add(a, b, c) {
     return a + b + c;
   }

   const nums = [1, 2, 3];
   const sum = add(...nums); // Passing array as arguments

   console.log(sum); // Output: 6
   ```

4. Copying Arrays and Objects:
   - The spread operator can be used to create a shallow copy of an array or object.
   ```javascript
   const originalArray = [1, 2, 3];
   const newArray = [...originalArray]; // Shallow copying an array

   console.log(newArray); // Output: [1, 2, 3]
   ```

   ```javascript
   const originalObj = { foo: 'bar' };
   const newObj = { ...originalObj }; // Shallow copying an object

   console.log(newObj); // Output: { foo: 'bar' }
   ```

The spread operator provides a concise and powerful syntax for working with arrays, objects, and function arguments. It simplifies the process of combining arrays, merging objects, copying data structures, and passing array elements as individual function arguments.