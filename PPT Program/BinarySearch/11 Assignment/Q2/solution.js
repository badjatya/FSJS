const findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

const nums1 = [1, 2, 3, 1];
const result1 = findPeakElement(nums1);
console.log(result1);

const nums2 = [1, 2, 1, 3, 5, 6, 4];
const result2 = findPeakElement(nums2);
console.log(result2);
