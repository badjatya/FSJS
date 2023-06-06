function compress(chars) {
  let i = 0;
  let j = 0;
  while(i < chars.length) {
      let count = 0;
      let char = chars[i];
      while(i < chars.length && chars[i] === char) {
          count++;
          i++;
      }
      chars[j] = char;
      j++;
      if(count > 1) {
          let countStr = count.toString();
          for(let k=0; k<countStr.length; k++) {
              chars[j] = countStr[k];
              j++;
          }
      }
  }
  return j;
}

let chars = ["a","a","b","b","c","c","c"];
console.log(compress(chars)); // 6
console.log(chars); // ["a","2","b","2","c","3"]