function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let [a, b] of ops) {
      minRow = Math.min(minRow, a);
      minCol = Math.min(minCol, b);
    }
  
    return minRow * minCol; 
  }
  

console.log(maxCount(3, 3, [[2, 2], [3, 3]])); 
  