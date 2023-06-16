function reverseNumber(number) {
    const stack = [];
    let reversedNumber = "";
  
    const digits = number.toString().split("");
    digits.forEach((digit) => stack.push(digit));
  
    while (stack.length > 0) {
      reversedNumber += stack.pop();
    }
  
    const result = parseInt(reversedNumber);
  
    return result;
  }
  
console.log(reverseNumber(365));
console.log(reverseNumber(6899));

  