function find132pattern(nums) {
    const stack = [];
    let maxVal = Number.NEGATIVE_INFINITY;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < maxVal) {
            return true;
        }

        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            maxVal = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
}
const nums1 = [1, 2, 3, 4];
console.log(find132pattern(nums1)); // Output: false

const nums2 = [3, 1, 4, 2];
console.log(find132pattern(nums2)); // Output: true

const nums3 = [-1, 3, 2, 0];
console.log(find132pattern(nums3)); // Output: true
