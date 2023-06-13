const intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result1 = intersection(nums1, nums2);
console.log(result1);

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
const result2 = intersection(nums3, nums4);
console.log(result2);
