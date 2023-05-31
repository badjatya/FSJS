// Brute force approach
function moveZeroes(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < n; j++) {
                if (nums[j] !== 0) {
                    // Swapping non-zero element with the current zero
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    break;
                }
            }
        }
    }
}

// Test example 1
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
