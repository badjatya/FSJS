# Q.7 What’s difference between map & forEach?

The `map()` and `forEach()` methods are both array iteration methods in JavaScript, but they have some key differences in terms of their purpose and return values.

1. Return Value:
   - `map()`: The `map()` method creates a new array by applying a provided callback function to each element of the original array. It returns a new array containing the results of the callback function for each element in the same order as the original array.
   - `forEach()`: The `forEach()` method iterates over the array and executes a provided callback function for each element. It does not return a new array. Instead, it is used for performing side effects, such as modifying the existing array or performing actions for each element.

2. Usage:
   - `map()`: `map()` is typically used when you want to transform or derive a new array based on the elements of the original array. It allows you to apply a transformation or computation to each element and collect the results in a new array.
   - `forEach()`: `forEach()` is used when you want to perform an operation or action for each element in the array. It is useful for tasks like logging values, updating properties, or invoking functions for each element without creating a new array.

3. Modifying the Original Array:
   - `map()`: The `map()` method does not modify the original array. It creates a new array based on the return values of the callback function, leaving the original array unchanged.
   - `forEach()`: The `forEach()` method allows you to modify the original array within the callback function. You can update or mutate the elements of the array, but it does not return a new array with the modified values.

4. Ability to Chain Methods:
   - `map()`: The `map()` method returns a new array, allowing you to chain other array methods after it.
   - `forEach()`: The `forEach()` method does not return a value, so it cannot be directly chained with other array methods.

Here's an example to illustrate the differences between `map()` and `forEach()`:

```javascript
const numbers = [1, 2, 3, 4];

const doubledMap = numbers.map((num) => num * 2);
console.log(doubledMap); // Output: [2, 4, 6, 8]

const doubledForEach = [];
numbers.forEach((num) => doubledForEach.push(num * 2));
console.log(doubledForEach); // Output: [2, 4, 6, 8]
```

In this example, the `map()` method is used to create a new array `doubledMap` where each element is multiplied by 2. The `forEach()` method is used to iterate over the `numbers` array and push the doubled values into the `doubledForEach` array.

In summary, `map()` is used when you want to derive a new array based on the original array, while `forEach()` is used for iterating over the array and performing actions for each element without returning a new array.