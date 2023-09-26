function findShortestElement(arr) {
    if(arr.length === 0) return '';
    let shortest = 'aaaaaaaaaaab';
    for (let i of arr){
        if(i.length < shortest.length){
            shortest = i;
        }
    }
    return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'