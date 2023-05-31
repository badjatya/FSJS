// Optimized solution

function containsDuplicate(nums) {
    const uniqueSet = new Set();

    for (const num of nums) {
        if (uniqueSet.has(num)) {
            return true;
        }
        uniqueSet.add(num);
    }

    return false;
}

// Test example 1
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true
