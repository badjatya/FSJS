function swap(str, i, j) {
    const strArr = str.split('');
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    return strArr.join('');
  }
  
  function generatePermutations(str, left, right, results) {
    if (left === right) {
      results.push(str);
      return;
    }
  
    for (let i = left; i <= right; i++) {
      str = swap(str, left, i);
      generatePermutations(str, left + 1, right, results);
      str = swap(str, left, i); // backtrack
    }
  }
  
  function printPermutations(str) {
    const results = [];
    const n = str.length;
  
    generatePermutations(str, 0, n - 1, results);
  
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
  
  // Example usage:
  const str = "abb";
  printPermutations(str);
  