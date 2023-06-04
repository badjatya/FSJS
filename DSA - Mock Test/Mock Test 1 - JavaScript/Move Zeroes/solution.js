function moveZeroes(nums) {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex++] = nums[i];
    }
  }
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const numsOne = [0,1,0,3,12];
console.log("Before: ", numsOne)
moveZeroes(numsOne)
console.log("After: ", numsOne)

const numsTwo = [0];
console.log("Before: ", numsTwo)
moveZeroes(numsTwo)
console.log("After: ", numsTwo)