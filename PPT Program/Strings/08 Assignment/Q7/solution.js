function decodeString(s) {
  let stack = [];
  for(let i=0; i<s.length; i++) {
      if(s[i] === ']') {
          let str = '';
          while(stack[stack.length-1] !== '[') {
              str = stack.pop() + str;
          }
          stack.pop();
          let numStr = '';
          while(stack.length > 0 && !isNaN(parseInt(stack[stack.length-1]))) {
              numStr = stack.pop() + numStr;
          }
          let num = parseInt(numStr);
          let decodedStr = '';
          for(let j=0; j<num; j++) {
              decodedStr += str;
          }
          stack.push(decodedStr);
      } else {
          stack.push(s[i]);
      }
  }
  return stack.join('');
}

let s = "3[a]2[bc]";
console.log(decodeString(s));