function isIsogram(str) {
  // Convert the string to lowercase to ignore letter casing
  let lowerStr = str.toLowerCase();

  let charCount = {};

  for (let char of lowerStr) {
      if (charCount[char]) {
          return false; // Not an isogram
      }

      charCount[char] = 1;
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
