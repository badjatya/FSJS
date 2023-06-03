function completeRows(n) {
    let k = 0; 
    let total = 0; 

    while (total <= n) {
      k++; 
      total += k; 
    }
  
    return k - 1;
  }
  
console.log(completeRows(5));
  