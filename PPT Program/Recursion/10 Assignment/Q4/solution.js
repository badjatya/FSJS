function calculateLength(str) {
    if (str === "") {
      return 0;
    }
  
    return 1 + calculateLength(str.slice(1));
  }

const str = "abcd";
const length = calculateLength(str);
console.log(length);
  