function checkValidString(s) {
  let low = 0;
  let high = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      low++;
      high++;
    } else if (char === ')') {
      if (low > 0) {
        low--;
      }

      high--;
    } else {
      if (low > 0) {
        low--;
      }

      high++;
    }

    if (high < 0) {
      return false;
    }
  }

  return low === 0;
}