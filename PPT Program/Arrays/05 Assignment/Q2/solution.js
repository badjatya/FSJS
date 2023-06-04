function arrangeCoins(n) {
  let k = 0;
  while (n >= k) {
      n -= k;
      k++;
  }
  return k - 1;
}

const n = 5;
console.log(arrangeCoins(n))