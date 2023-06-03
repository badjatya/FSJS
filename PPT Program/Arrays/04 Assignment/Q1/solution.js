function findCommonElements(arr1, arr2, arr3) {
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = 0;
    let result = [];
  
    while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
      if (arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]) {
        result.push(arr1[ptr1]);
        ptr1++;
        ptr2++;
        ptr3++;
      } else if (arr1[ptr1] < arr2[ptr2]) {
        ptr1++;
      } else if (arr2[ptr2] < arr3[ptr3]) {
        ptr2++;
      } else {
        ptr3++;
      }
    }
  
    return result;
  }

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];
let commonElements = findCommonElements(arr1, arr2, arr3);
console.log(commonElements);
  