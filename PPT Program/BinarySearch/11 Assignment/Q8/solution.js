const intersect = function(nums1, nums2) {
    const map = new Map();
    const result = [];

    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result1 = intersect(nums1, nums2);
console.log(result1);

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
const result2 = intersect(nums3, nums4);
console.log(result2);
