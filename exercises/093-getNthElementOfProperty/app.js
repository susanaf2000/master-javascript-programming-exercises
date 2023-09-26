function getNthElementOfProperty(obj, key, num){
    if(key in obj && Array.isArray(obj[key])) {
        if(num >= 0 && num < obj[key].length) {
            return obj[key][num];
        }
    }
    return undefined;
}
let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output);