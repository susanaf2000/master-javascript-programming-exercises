function getElementsGreaterThan10AtProperty(obj, key) {
    if(key in obj && Array.isArray(obj[key])) {
        return obj[key].filter((element) => element > 10);
    }
    else return [];
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);