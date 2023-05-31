// Optimized solution

function findErrorNums(nums) {
    const n = nums.length;
    let duplicate = -1;
    let missing = -1;
    let sum = 0;
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        actualSum += i + 1;
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            duplicate = Math.abs(nums[i]);
        } else {
            nums[Math.abs(nums[i]) - 1] *= -1;
        }
    }

    missing = actualSum - sum + duplicate;

    return [duplicate, missing];
}

// Test example 1
const nums = [1, 2, 2, 4];
console.log(findErrorNums(nums)); // Output: [2, 3]
