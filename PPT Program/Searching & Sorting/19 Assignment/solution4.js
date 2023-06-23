function moveZeroesToEnd(arr) {
    let count = 0; // Count of non-zero elements

    // Traverse the array and move non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }

    // Fill the remaining positions with zeroes
    while (count < arr.length) {
        arr[count] = 0;
        count++;
    }

    return arr;
}
// Example 1
const arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeroesToEnd(arr1)); // Output: [1, 2, 4, 3, 5, 0, 0, 0]

// Example 2
const arr2 = [1, 2, 0, 0, 0, 3, 6];
console.log(moveZeroesToEnd(arr2)); // Output: [1, 2, 3, 6, 0, 0, 0]
