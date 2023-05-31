// Brute force approach
function plusOne(digits) {
    // Convert digits to number
    const num = Number(digits.join(""));

    // Increment the number
    const incrementedNum = num + 1;

    // Convert incrementedNum to array of digits
    const result = Array.from(String(incrementedNum), Number);
    return result;
}

// Test example 1
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]
