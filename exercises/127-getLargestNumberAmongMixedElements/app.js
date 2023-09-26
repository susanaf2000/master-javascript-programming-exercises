function getLargestNumberAmongMixedElements(arr) {
    let largestNumber = 0;

    for(let element of arr){
        if( typeof element === 'number' && element > largestNumber){
            largestNumber = element;
        }
    }
    if(largestNumber === 0) return 0;
    else return largestNumber;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
