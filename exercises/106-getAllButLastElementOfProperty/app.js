function getAllButLastElementOfProperty(obj, key) {
  if(!Array.isArray(obj[key]) || obj[key].length === 0){
    return [];
  }
  return obj[key].slice(0, -1)
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
