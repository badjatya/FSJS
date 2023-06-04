function findUnique(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let answer = [[], []];
  for (let num of set1) {
      if (!set2.has(num)) {
          answer[0].push(num);
      }
  }
  for (let num of set2) {
      if (!set1.has(num)) {
          answer[1].push(num);
      }
  }
  return answer;
}

console.log(findUnique([1,2,3], [2,4,6]))