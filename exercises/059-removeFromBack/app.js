function removeFromBack(arr) {
    let result = arr.pop(2);
    return arr;
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
