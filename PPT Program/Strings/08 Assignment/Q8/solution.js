const buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
      return false;
  }
  
  if (s === goal) {
      const seen = new Set(s);
      return seen.size < s.length;
  }
  
  const pairs = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
          pairs.push([s[i], goal[i]]);
      }
  }
  
  return pairs.length === 2 && pairs[0].join() === pairs[1].reverse().join();
};