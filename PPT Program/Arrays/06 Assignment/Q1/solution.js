function findPermutation(s) {
  const n = s.length;
  const result = new Array(n+1).fill(0);
  let left = 0, right = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      result[i] = left++;
    } else {
      result[i] = right--;
    }
  }

  result[n] = left;
  return result;
}

console.log(findPermutation("IDID"));