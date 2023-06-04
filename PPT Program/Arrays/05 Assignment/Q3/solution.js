function sortedSquares(nums) {
  return nums.map(x => x * x).sort((a, b) => a - b);
}

console.log(sortedSquares([-4,-1,0,3,10]))