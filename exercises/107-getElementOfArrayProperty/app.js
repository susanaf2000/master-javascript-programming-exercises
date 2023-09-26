function getElementOfArrayProperty(obj, key, index) {
    if(!Array.isArray(obj[key]) || obj[key].length === 0){
        return undefined;
    }
    return obj[key][index];
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
