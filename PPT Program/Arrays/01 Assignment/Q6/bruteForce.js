// Brute force approach
function containsDuplicate(nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
}

// Test example 1
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true
