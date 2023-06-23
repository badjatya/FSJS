function maximumGap(nums) {
    if (nums.length < 2) {
        return 0;
    }

    const maxNum = Math.max(...nums);

    let exp = 1;
    const count = Array(10).fill(0);
    const output = Array(nums.length);

    while (Math.floor(maxNum / exp) > 0) {
        count.fill(0);

        for (const num of nums) {
            const digit = Math.floor((num / exp) % 10);
            count[digit]++;
        }

        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i];
            const digit = Math.floor((num / exp) % 10);
            output[count[digit] - 1] = num;
            count[digit]--;
        }

        nums = output.slice();
        exp *= 10;
    }

    let maxGap = 0;
    for (let i = 1; i < nums.length; i++) {
        const gap = nums[i] - nums[i - 1];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap;
}
const nums1 = [3, 6, 9, 1];
const result1 = maximumGap(nums1);
console.log(result1);
// Output: 3

const nums2 = [10];
const result2 = maximumGap(nums2);
console.log(result2);
// Output: 0
