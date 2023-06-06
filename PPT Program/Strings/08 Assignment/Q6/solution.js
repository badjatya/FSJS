function findAnagrams(s, p) {
  let map = new Map();
  let res = [];
  for(let i=0; i<p.length; i++) {
      if(map.has(p[i])) {
          map.set(p[i], map.get(p[i])+1);
      } else {
          map.set(p[i], 1);
      }
  }
  let left = 0;
  let right = 0;
  let count = p.length;
  while(right < s.length) {
      let cur = s[right];
      if(map.has(cur) && map.get(cur) > 0) {
          count--;
      }
      if(map.has(cur)) {
          map.set(cur, map.get(cur)-1);
      }
      right++;
      if(count === 0) {
          res.push(left);
      }
      if(right-left === p.length) {
          let prev = s[left];
          if(map.has(prev) && map.get(prev) >= 0) {
              count++;
          }
          if(map.has(prev)) {
              map.set(prev, map.get(prev)+1);
          }
          left++;
      }
  }
  return res;
}

let s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s, p)); // [0,6]