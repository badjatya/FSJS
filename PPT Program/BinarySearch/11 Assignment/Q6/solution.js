const findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

const nums1 = [3, 4, 5, 1, 2];
const result1 = findMin(nums1);
console.log(result1);

const nums2 = [4, 5, 6, 7, 0, 1, 2];
const result2 = findMin(nums2);
console.log(result2);

const nums3 = [11, 13, 15, 17];
const result3 = findMin(nums3);
console.log(result3);
