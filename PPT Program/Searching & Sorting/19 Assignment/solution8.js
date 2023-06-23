function intersect(nums1, nums2) {
    const countMap = {};
    const intersection = [];

    // Create a frequency map for nums1
    for (let num of nums1) {
        countMap[num] = countMap[num] ? countMap[num] + 1 : 1;
    }

    // Check for intersection with nums2 and decrement count in the map
    for (let num of nums2) {
        if (countMap[num] > 0) {
            intersection.push(num);
            countMap[num]--;
        }
    }

    return intersection;
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersect(nums1, nums2);
console.log(result); // Output: [2, 2]
