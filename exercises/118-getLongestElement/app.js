function getLongestElement(arr) {
    if(arr.length < 1) return '';
    let longest = '';
    for(let i of arr){
        if(i.length > longest.length){
            longest = i;
        }
    }
    return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
