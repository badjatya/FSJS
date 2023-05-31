// Optimized solution

function plusOne(digits) {
    const n = digits.length;

    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    // If all digits are 9, add a new leading 1
    digits.unshift(1);
    return digits;
}

// Test example 1
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]
