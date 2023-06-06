function addStrings(num1, num2) {
  let result = '';

  let carry = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    const x1 = p1 >= 0 ? num1[p1] - '0' : 0;
    const x2 = p2 >= 0 ? num2[p2] - '0' : 0;

    const currentSum = x1 + x2 + carry;

    carry = Math.floor(currentSum / 10);
    const remainder = currentSum % 10;

    result = remainder + result;

    p1--;
    p2--;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
}