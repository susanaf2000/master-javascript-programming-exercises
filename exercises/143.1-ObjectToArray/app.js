function getAllKeys(obj) {
  let arr = [];

  for(let i in obj) {
    arr.push(i);
  }
  return arr;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
