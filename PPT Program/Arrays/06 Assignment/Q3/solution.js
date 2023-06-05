function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i == 0 || i == n - 1) {
    return false;
  }

  for (let j = 0; j < i; j++) {
    if (arr[j] >= arr[j + 1]) {
      return false;
    }
  }

  for (let j = i; j < n - 1; j++) {
    if (arr[j] <= arr[j + 1]) {
      return false;
    }
  }

  return true;
}

arr = [2,1]
console.log(validMountainArray(arr));