function countRemainingWords(sequence) {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const word = sequence[i];
  
      if (stack.length > 0 && stack[stack.length - 1] === word) {
        stack.pop();
      } else {
        stack.push(word);
      }
    }
  
    return stack.length;
  }
  
  const sequence1 = ['ab', 'aa', 'aa', 'bcd', 'ab'];
  console.log('Remaining Words:', countRemainingWords(sequence1));
  
  const sequence2 = ['tom', 'jerry', 'jerry', 'tom'];
  console.log('Remaining Words:', countRemainingWords(sequence2));
  