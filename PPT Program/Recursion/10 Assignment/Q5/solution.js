function countContiguousSubstrings(S) {
    let count = 0;
    const n = S.length;
  
    for (let i = 0; i < n; i++) {
      let j = i;
      while (j < n && S[i] === S[j]) {
        count++;
        j++;
      }
    }
  
    return count;
  }
  

const S = "abcab";
const count = countContiguousSubstrings(S);
console.log(count);
  