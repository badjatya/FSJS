function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const intersectionSet = new Set();

    for (let num of nums2) {
        if (set1.has(num)) {
            intersectionSet.add(num);
        }
    }

    return Array.from(intersectionSet);
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersection(nums1, nums2);
console.log(result); // Output: [2]
