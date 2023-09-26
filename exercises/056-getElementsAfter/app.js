function getElementsAfter(array, n) {
  // your code here
  let cutArray = array.slice(n + 1);
  return cutArray;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
