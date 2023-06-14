function lastRemaining(n) {
    let start = 1;
    let step = 1;
    let remaining = n;
  
    let leftToRight = true;
  
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        start += step;
      }
  
      step *= 2;
      remaining = Math.floor(remaining / 2);
      leftToRight = !leftToRight;
    }
  
    return start;
  }
  