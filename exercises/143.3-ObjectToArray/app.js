function convertObjectToList(obj) {
  let arr = [];

  for(let key in obj) {
    let pair = [key, obj[key]];
    arr.push(pair);
  }
  return arr;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
