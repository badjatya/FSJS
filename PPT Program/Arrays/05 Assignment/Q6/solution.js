function findDuplicates(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] < 0) {
          result.push(Math.abs(nums[i]));
      } else {
          nums[index] = -nums[index];
      }
  }
  return result;
}

const result = findDuplicates([4,3,2,7,8,2,3,1]);
console.log(result);
  