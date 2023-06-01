function binarySearch(nums, target) {
    // Check if the input array is valid.
    if (nums.length === 0) {
        return -1;
    }

    // Initialize the low and high indexes.
    let low = 0;
    let high = nums.length - 1;

    // While the low index is less than or equal to the high index,
    while (low <= high) {
        // Find the middle index.
        let mid = Math.floor((low + high) / 2);

        // If the target is equal to the middle element,
        if (nums[mid] === target) {
            // Return the index of the middle element.
            return mid;
        }

        // If the target is less than the middle element,
        if (nums[mid] > target) {
            // Set the high index to the middle index minus 1.
            high = mid - 1;
        } else {
            // Set the low index to the middle index plus 1.
            low = mid + 1;
        }
    }

    // If the target is not found, return -1.
    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
const index = binarySearch(nums, target);
console.log(index); // 4
