function minimumScore(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    let min = nums[0] + k;
    let max = nums[n - 1] - k;

    if (min > max) {
        [min, max] = [max, min];
    }

    for (let i = 1; i < n - 1; i++) {
        const subtract = nums[i] - k;
        const add = nums[i] + k;

        min = Math.min(subtract, min);
        max = Math.max(add, max);

        if (min > max) {
            [min, max] = [max, min];
        }
    }

    return max - min;
}

// Test the function
const nums = [1];
const k = 0;
console.log(minimumScore(nums, k)); // Output: 0
