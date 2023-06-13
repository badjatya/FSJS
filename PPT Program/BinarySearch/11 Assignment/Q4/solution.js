const findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Find the intersection point of the two pointers
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            break;
        }
    }

    // Move one pointer to the beginning
    let ptr1 = nums[0];

    // Move both pointers at the same speed until they meet again
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;
};

const nums1 = [1, 3, 4, 2, 2];
const result1 = findDuplicate(nums1);
console.log(result1);

const nums2 = [3, 1, 3, 4, 2];
const result2 = findDuplicate(nums2);
console.log(result2);
