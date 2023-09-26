function joinArrays(arr1, arr2) {
  let merged = arr1.concat(arr2);
  return merged;
  
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
