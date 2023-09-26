function computeFactorialOfN(n) {
    let result = 1; //starts at 1
    for (let e = 1; e < n + 1; e++){
        result *= e;
    }
    return result;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
