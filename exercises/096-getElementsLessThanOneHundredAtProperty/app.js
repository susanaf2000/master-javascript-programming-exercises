function getElementsLessThan100AtProperty(obj, key) {
    if(key in obj && Array.isArray(obj[key])) {
        return obj[key].filter((element) => element < 100);
    }
    else return obj[key] = [];
}
let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);