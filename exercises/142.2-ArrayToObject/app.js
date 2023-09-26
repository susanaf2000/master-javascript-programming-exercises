function fromListToObject(array) {
  let result = {};

  for (let i = 0; i < array.length; i++){
    let pair = array[i];

    if(pair && pair.length === 2) {
      let key = pair[0];
      let value = pair[1];

      result[key] = value;
    }
  }
  return result;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
