// Brute force approach
function removeElement(numbers, val) {
    numbers = numbers.filter((num) => num !== val);
    return numbers.length;
}

// Corner case: Empty array
console.log(removeElement([], 3)); // 0

// Corner case: No element equal to val
console.log(removeElement([1, 2, 3, 4, 5], 6)); // 5

// Corner case: All elements equal to val
console.log(removeElement([2, 2, 2, 2], 2)); // 0

// Corner case: Multiple occurrences of val
const numArray = [3, 2, 2, 3];
console.log(removeElement(numArray, 3)); // 2
