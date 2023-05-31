// Brute force approach
function findErrorNums(nums) {
    const n = nums.length;
    const numSet = new Set();
    let duplicate = -1;
    let missing = -1;
    let sum = 0;

    for (const num of nums) {
        sum += num;
        if (numSet.has(num)) {
            duplicate = num;
        }
        numSet.add(num);
    }

    missing = (n * (n + 1)) / 2 - (sum - duplicate);

    return [duplicate, missing];
}

// Test example 1
const nums = [1, 2, 2, 4];
console.log(findErrorNums(nums)); // Output: [2, 3]
