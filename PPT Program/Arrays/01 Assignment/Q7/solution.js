// Optimized solution

function moveZeroes(nums) {
    const n = nums.length;
    let left = 0; // Pointer for non-zero elements

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            // Move non-zero element to the left
            nums[left] = nums[i];
            left++;
        }
    }

    // Fill remaining positions with zeros
    for (let i = left; i < n; i++) {
        nums[i] = 0;
    }
}

// Test example 1
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
