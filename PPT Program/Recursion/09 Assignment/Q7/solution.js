function permuteString(str, l, r, result) {
  if (l === r) {
    result.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swapCharacters(str, l, i);
      permuteString(str, l + 1, r, result);
      str = swapCharacters(str, l, i);
    }
  }
}

function swapCharacters(str, i, j) {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function generatePermutations(S) {
  const result = [];
  permuteString(S, 0, S.length - 1, result);
  return result;
}

console.log(generatePermutations("ABC"));
console.log(generatePermutations("XY"));
