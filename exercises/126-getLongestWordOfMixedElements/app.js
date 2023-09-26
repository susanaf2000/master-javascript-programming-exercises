function getLongestWordOfMixedElements(arr) {
    let longestWord = '';
    let longestLength = 0;

    for(let element of arr){
        if(typeof element === 'string' && element.length > longestLength){
            longestWord = element;
            longestLength = element.length;
        }
    }
    return longestWord;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
