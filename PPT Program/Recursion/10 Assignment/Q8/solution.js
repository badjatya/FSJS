function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
const str = "geeksforgeeks portal";
const consonantCount = countConsonants(str);
console.log(consonantCount);
  