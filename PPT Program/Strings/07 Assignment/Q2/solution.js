function isStrobogrammatic(num) {
  const strobMap = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };

  let result = '';

  for (let i = num.length - 1; i >= 0; i--) {
    const digit = num[i];

    if (!(digit in strobMap)) {
      return false;
    }

    result += strobMap[digit];
  }

  return result === num;
}