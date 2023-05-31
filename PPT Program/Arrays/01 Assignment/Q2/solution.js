// Optimized solution

function removeElement(nums, val) {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }

    return slow;
}

// Corner case: Empty array
console.log(removeElement([], 3)); // 0

// Corner case: No element equal to val
console.log(removeElement([1, 2, 3, 4, 5], 6)); // 5

// Corner case: All elements equal to val
console.log(removeElement([2, 2, 2, 2], 2)); // 0

// Corner case: Multiple occurrences of val
const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3)); // 2
