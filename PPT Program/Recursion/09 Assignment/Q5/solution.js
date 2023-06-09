function findMax(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  const max = findMax(arr, n - 1);
  return Math.max(max, arr[n - 1]);
}

const arr1 = [1, 4, 3, -5, -4, 8, 6];
console.log(findMax(arr1, arr1.length));

const arr2 = [1, 4, 45, 6, 10, -8];
console.log(findMax(arr2, arr2.length));
