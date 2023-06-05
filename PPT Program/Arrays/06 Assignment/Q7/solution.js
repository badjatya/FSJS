const generateMatrix = (n) => {
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n).fill(0);
    }
  
    let top = 0,
      bottom = n - 1,
      left = 0,
      right = n - 1;
  
    let num = 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num;
        num++;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num;
        num++;
      }
      right--;
  
      if (left <= right && top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num;
          num++;
        }
        bottom--;
  
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num;
          num++;
        }
        left++;
      }
    }
    return matrix;
  };

console.log(generateMatrix(3));