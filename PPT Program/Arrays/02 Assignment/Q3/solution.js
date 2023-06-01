function longestHarmoniousSubsequence(nums) {
    const counts = new Map();
    for (const num of nums) {
        counts.set(num, counts.get(num) || 0) + 1;
    }

    let maxLen = 0;
    for (const [num, count] of counts.entries()) {
        if (count > 0) {
            maxLen = Math.max(maxLen, count + counts.get(num + 1) || 0);
        }
    }

    return maxLen;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const len = longestHarmoniousSubsequence(nums);
console.log(len); // 5
