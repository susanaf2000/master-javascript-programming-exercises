function average(arr) {
  if(arr.length === 0) return 0;

  let sumOfElements = sum(arr);
  return sumOfElements / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let num of arr){
    total += num;
  }
  return total;
}

console.log(average([1, 2])); // --> 1.5
