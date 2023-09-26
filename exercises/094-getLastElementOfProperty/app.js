function getLastElementOfProperty(obj, key) {
    if(key in obj && Array.isArray(obj[key])) {
        let array = obj[key];
        let length = array.length;

        if (length > 0) return array[length -1];
    }
    else return undefined;
}
let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output);