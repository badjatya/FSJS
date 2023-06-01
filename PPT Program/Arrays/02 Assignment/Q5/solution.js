function maxProductOfThree(nums) {
    // Find the three largest numbers in the array.
    const max1 = Math.max(...nums);
    const max2 = Math.max(...nums.filter((n) => n !== max1));
    const max3 = Math.max(...nums.filter((n) => n !== max1 && n !== max2));

    // Return the product of the three largest numbers.
    return max1 * max2 * max3;
}
const nums = [1, 2, 3];
const maxProduct = maxProductOfThree(nums);
console.log(maxProduct); // 6
