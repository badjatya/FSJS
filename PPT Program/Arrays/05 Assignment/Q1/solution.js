function convertArray(original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  let result = new Array(m);
  for (let i = 0; i < original.length; i++) {
    let row = Math.floor(i / n);
    let col = i % n;
    if (!result[row]) {
      result[row] = new Array(n);
    }
    result[row][col] = original[i];
  }
  return result;
}

console.log(convertArray([1,2,3,4], 2, 2)); // [[1,2],[3,4]]
console.log(convertArray([1,2,3], 1, 3)); // [[1,2,3]]
console.log(convertArray([1,2], 3, 3)); // []
