const searchRange = function(nums, target) {
    const findLeftPosition = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let position = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
                if (nums[mid] === target) {
                    position = mid;
                }
            } else {
                left = mid + 1;
            }
        }

        return position;
    };

    const findRightPosition = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let position = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
                if (nums[mid] === target) {
                    position = mid;
                }
            } else {
                right = mid - 1;
            }
        }

        return position;
    };

    const leftPosition = findLeftPosition(nums, target);
    const rightPosition = findRightPosition(nums, target);

    return [leftPosition, rightPosition];
};

const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
const result1 = searchRange(nums1, target1);
console.log(result1);

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
const result2 = searchRange(nums2, target2);
console.log(result2);

const nums3 = [];
const target3 = 0;
const result3 = searchRange(nums3, target3);
console.log(result3);
