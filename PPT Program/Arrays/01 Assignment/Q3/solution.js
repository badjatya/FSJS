// Optimized solution

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

// Test example 1
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2
