function groupIntegers(nums) {
    nums.sort((a, b) => a - b);
    const pairs = [];
    for (let i = 0; i < nums.length; i += 2) {
        pairs.push([nums[i], nums[i + 1]]);
    }
    let sum = 0;
    for (const pair of pairs) {
        sum += Math.min(pair[0], pair[1]);
    }
    return sum;
}

const nums = [1, 4, 3, 2];
const sum = groupIntegers(nums);
console.log(sum); // 4
