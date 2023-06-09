function factorial(N) {
  let result = 1;
  
  for (let i = N; i >= 1; i--) {
    result *= i;
  }
  
  return result;
}
