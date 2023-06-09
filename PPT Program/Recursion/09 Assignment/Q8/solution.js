function productOfArray(arr) {
  let product = 1;
  
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  
  return product;
}

console.log(productOfArray([1, 2, 3, 4, 5])); // Output: 120
console.log(productOfArray([1, 6, 3])); // Output: 18
