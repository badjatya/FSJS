function canRepresentBST(arr) {
    const n = arr.length;
  
    for (let i = 0; i < Math.floor(n / 2) - 1; i++) {
      const leftChildIndex = 2 * i + 1;
      const rightChildIndex = 2 * i + 2;
  
      if (arr[i] > arr[leftChildIndex] || arr[i] > arr[rightChildIndex])
        return false;
    }
  
    if (n % 2 === 0) {
      const lastParentIndex = Math.floor(n / 2) - 1;
  
      if (arr[lastParentIndex] > arr[2 * lastParentIndex + 1])
        return false;
    }
  
    return true;
  }
  
const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(canRepresentBST(arr1)); 

const arr2 = [11, 6, 13, 5, 12, 10];
console.log(canRepresentBST(arr2)); 
  