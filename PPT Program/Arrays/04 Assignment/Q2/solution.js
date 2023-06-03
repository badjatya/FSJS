function findMissingElements(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
  
    let missingNums1 = [];
    let missingNums2 = [];
  
    for (let num of nums1) {
      if (!set2.has(num)) {
        missingNums1.push(num);
      }
    }
  
    for (let num of nums2) {
      if (!set1.has(num)) {
        missingNums2.push(num);
      }
    }
  
    return [missingNums1, missingNums2];
  }

let nums1 = [1, 2, 3];
let nums2 = [2, 4, 6];
let answer = findMissingElements(nums1, nums2);
console.log(answer);
  