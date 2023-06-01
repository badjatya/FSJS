function isMonotonic(nums) {
    // Check if the array is increasing.
    let increasing = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            increasing = false;
            break;
        }
    }

    // Check if the array is decreasing.
    let decreasing = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
            break;
        }
    }

    // Return true if the array is increasing or decreasing.
    return increasing || decreasing;
}

const nums = [1, 2, 2, 3];
console.log(isMonotonic(nums)); // true

const newNums = [1, 2, 3, 2];
console.log(isMonotonic(newNums)); // false
