function getElementsThatEqual10AtProperty(obj, key) {
    if(key in obj && Array.isArray(obj[key])) {
        return obj[key].filter((element) => element === 10)
    }
    else return obj[key] = [];
}
let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output);