// Write your function here
function computeAverageOfNumbers(num) {
    if (num.length == 0) return 0;

    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total / num.length;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);