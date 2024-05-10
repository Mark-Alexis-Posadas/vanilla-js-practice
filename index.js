// Finding Unique Elements:
// Input: [1, 2, 3, 4, 2, 1, 5]
const findingUniqueElements = (elements) => {
  let results = elements.filter((v, i, self) => {
    return i === self.indexOf(v);
  });
  return results;
};

console.log(findingUniqueElements([1, 2, 3, 4, 2, 1, 5]));

// Output: [1, 2, 3, 4, 5]

// Checking for Palindromes:
// Input: ['radar', 'hello', 'level', 'world']
const palindromesChecking = (params) => {
  let results = [];
  for (let param of params) {
    const len = param.length;
    let isPalindrome = true;
    for (let i = 0; i < len / 2; i++) {
      if (param[i] !== param[len - 1 - i]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      results.push(param);
    }
  }
  return results;
};

console.log(palindromesChecking(["radar", "hello", "level", "world"]));
