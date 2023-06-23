function containsDuplicate(nums) {
    const numSet = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}
const nums1 = [1, 2, 3, 1];
const result1 = containsDuplicate(nums1);
console.log(result1);
// Output: true

const nums2 = [1, 2, 3, 4];
const result2 = containsDuplicate(nums2);
console.log(result2);
// Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const result3 = containsDuplicate(nums3);
console.log(result3);
// Output: true
