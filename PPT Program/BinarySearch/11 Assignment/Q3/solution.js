const missingNumber = function(nums) {
    const n = nums.length;
    let missing = n;

    for (let i = 0; i < n; i++) {
        missing ^= i ^ nums[i];
    }

    return missing;
};

const nums1 = [3, 0, 1];
const result1 = missingNumber(nums1);
console.log(result1);

const nums2 = [0, 1];
const result2 = missingNumber(nums2);
console.log(result2);

const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const result3 = missingNumber(nums3);
console.log(result3);
