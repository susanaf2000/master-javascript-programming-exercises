function transformFirstAndLast(array) {
  if( array.length === 0) return {};

  let result = {};
  let firstElement = array[0];
  let lastElement = array[array.length -1];

  result[firstElement] = lastElement;;;;;;;

  return result;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
