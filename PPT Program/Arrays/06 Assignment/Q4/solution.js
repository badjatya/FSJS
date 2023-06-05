function findMaxLength(nums) {
    const n = nums.length;
    const map = new Map();
    let sum = 0;
    let maxLen = 0;
  
    for (let i = 0; i < n; i++) {
      sum += nums[i] === 1 ? 1 : -1;
  
      if (sum === 0) {
        maxLen = Math.max(maxLen, i + 1);
      } else if (map.has(sum)) {
        maxLen = Math.max(maxLen, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  
    return maxLen;
}

nums = [0,1]
console.log(findMaxLength(nums));