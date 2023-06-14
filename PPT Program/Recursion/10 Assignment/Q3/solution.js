function printSubsets(set) {
    const subsets = [];
  
    backtrack(set, "", 0, subsets);
  
    return subsets;
  }
  
  function backtrack(set, current, index, subsets) {
    if (index === set.length) {
      subsets.push(current);
      return;
    }
  
    backtrack(set, current + set[index], index + 1, subsets);
  
    backtrack(set, current, index + 1, subsets);
  }

const set = "abc";
const subsets = printSubsets(set);
console.log(subsets);
  