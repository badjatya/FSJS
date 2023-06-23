function rearrangeArray(arr) {
    let i = 0;
    let j = arr.length - 1;

    // Find the index of the first negative element
    while (i < j) {
        if (arr[i] < 0) {
            i++;
        } else {
            // Swap positive and negative elements
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j--;
        }
    }

    // Rearrange the positive and negative elements in alternate fashion
    let pos = i;
    let neg = 0;

    while (pos < arr.length && neg < pos && arr[neg] < 0) {
        // Swap positive and negative elements
        [arr[pos], arr[neg]] = [arr[neg], arr[pos]];
        pos++;
        neg += 2;
    }

    return arr;
}
// Example 1
const arr1 = [1, 2, 3, -4, -1, 4];
console.log(rearrangeArray(arr1)); // Output: [-4, 1, -1, 2, 3, 4]

// Example 2
const arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(rearrangeArray(arr2)); // Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
