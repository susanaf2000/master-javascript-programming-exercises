function addToBack(arr, element) {
  let addingElement = arr.push(element);
  return arr;
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
