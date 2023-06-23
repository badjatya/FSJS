function sortArray(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

function quickSort(nums, start, end) {
    if (start >= end) {
        return;
    }

    const pivotIndex = partition(nums, start, end);
    quickSort(nums, start, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, end);
}

function partition(nums, start, end) {
    const pivot = nums[end];
    let i = start;

    for (let j = start; j < end; j++) {
        if (nums[j] < pivot) {
            swap(nums, i, j);
            i++;
        }
    }

    swap(nums, i, end);
    return i;
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
// Example 1
const nums1 = [5, 2, 3, 1];
console.log(sortArray(nums1)); // Output: [1, 2, 3, 5]

// Example 2
const nums2 = [5, 1, 1, 2, 0, 0];
console.log(sortArray(nums2)); // Output: [0, 0, 1, 1, 2, 5]
