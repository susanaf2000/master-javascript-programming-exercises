function computeProductOfAllElements(arr) {
  let result = 1;
  if (arr.length < 1) return 0;
  for(let i of arr){
    result *= i;
  }
  return result;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
