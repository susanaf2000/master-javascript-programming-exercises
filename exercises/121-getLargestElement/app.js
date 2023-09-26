function getLargestElement(arr) {
  if(arr.length < 1 ) return 0;
  let largest = arr[0];
  for (let i of arr){
    if (i > largest){
      largest = i;
    }
  }
  return largest;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;