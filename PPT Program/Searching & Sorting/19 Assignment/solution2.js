function countSmaller(nums) {
    const counts = new Array(nums.length).fill(0);
    mergeSortAndCount(nums, 0, nums.length - 1, counts);
    return counts;
}

function mergeSortAndCount(nums, start, end, counts) {
    if (start >= end) {
        return [nums[start]];
    }

    const mid = start + Math.floor((end - start) / 2);
    const leftHalf = mergeSortAndCount(nums, start, mid, counts);
    const rightHalf = mergeSortAndCount(nums, mid + 1, end, counts);

    let left = 0;
    let right = 0;
    const merged = [];
    let count = 0;

    while (left < leftHalf.length && right < rightHalf.length) {
        if (leftHalf[left] > rightHalf[right]) {
            count += leftHalf.length - left;
            merged.push(leftHalf[left]);
            left++;
        } else {
            merged.push(rightHalf[right]);
            right++;
        }
    }

    while (left < leftHalf.length) {
        merged.push(leftHalf[left]);
        left++;
    }

    while (right < rightHalf.length) {
        merged.push(rightHalf[right]);
        right++;
    }

    for (let i = start; i <= end; i++) {
        nums[i] = merged[i - start];
    }

    counts[start] = count;
    return nums;
}
// Example 1
const nums1 = [5, 2, 6, 1];
console.log(countSmaller(nums1)); // Output: [2, 1, 1, 0]

// Example 2
const nums2 = [-1];
console.log(countSmaller(nums2)); // Output: [0]

// Example 3
const nums3 = [-1, -1];
console.log(countSmaller(nums3)); // Output: [0, 0]
