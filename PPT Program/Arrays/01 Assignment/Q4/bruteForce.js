// Brute force approach
function plusOne(digits) {
    const num = Number(digits.join(""));
    const incrementedNum = num + 1;
    const result = Array.from(String(incrementedNum), Number);
    return result;
}

// Test example 1
const digits = [1, 2, 3];
console.log(plusOne(digits));

// Test example 1
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target));
