const findOriginalArray = (changed) => {
    if (changed.length % 2 !== 0) {
      return [];
    }
    const freq = {};
    const result = [];
    changed.forEach((n) => {
      freq[n] = freq[n] + 1 || 1;
    });
    changed.sort((a, b) => a - b);
    for (let i = 0; i < changed.length; i++) {
      const key = changed[i];
      if (freq[key] === 0) {
        continue;
      }
      if (!freq[key * 2]) {
        return [];
      }
      result.push(key);
      freq[key]--;
      freq[key * 2]--;
    }
    return result;
  };

changed = [1,3,4,2,6,8]
console.log(findOriginalArray(changed));