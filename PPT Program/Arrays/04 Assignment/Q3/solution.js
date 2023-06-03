function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    const transpose = new Array(numCols);
    for (let i = 0; i < numCols; i++) {
      transpose[i] = new Array(numRows);
      for (let j = 0; j < numRows; j++) {
        transpose[i][j] = matrix[j][i];
      }
    }
  
    return transpose;
  }

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);
  