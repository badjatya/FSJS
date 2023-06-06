function reverseStr(str, k) {
  const chars = str.split('');

  for (let i = 0; i < chars.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, chars.length - 1);

    while (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;

      left++;
      right--;
    }
  }

  return chars.join('');
}