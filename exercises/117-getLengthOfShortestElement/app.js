function getLengthOfShortestElement(arr) {
    if(arr.length < 1) return 0;
    let shortest = 100;
    for (let i of arr){
        if(i.length < shortest){
            shortest = i.length;
        }
    }
    return shortest;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
