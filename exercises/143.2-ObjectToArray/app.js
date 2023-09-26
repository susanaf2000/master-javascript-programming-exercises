function listAllValues(obj) {
  let arr = [];

  for (let i in obj) {
    arr.push(obj[i]);
  }
  return arr;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
