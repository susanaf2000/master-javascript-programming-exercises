function filterEvenElements(arr) {
    return arr.filter((number) => number % 2 == 0)
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
