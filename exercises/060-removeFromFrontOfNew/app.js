function removeFromFrontOfNew(arr) {
    let newArray = arr.slice(1);
    return newArray;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
