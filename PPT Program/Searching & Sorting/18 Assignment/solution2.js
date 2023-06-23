function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1);
// Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);
// Output: [0, 1, 2]
