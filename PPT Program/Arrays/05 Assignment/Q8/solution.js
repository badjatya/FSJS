function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
      return [];
  }
  let count = new Map();
  for (let num of changed) {
      count.set(num, (count.get(num) || 0) + 1);
  }
  let result = [];
  changed.sort((a, b) => a - b);
  for (let num of changed) {
      if (count.get(num) === 0) {
          continue;
      }
      if (!count.has(num * 2) || count.get(num * 2) === 0) {
          return [];
      }
      result.push(num);
      count.set(num, count.get(num) - 1);
      count.set(num * 2, count.get(num * 2) - 1);
  }
  return result;
}
  
const result = findOriginalArray([1,3,4,2,6,8]);
console.log(result);
  