function addToFront(arr, element) {
  let AddElement = arr.unshift(element);
  return arr;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
