function getLengthOfLongestElement(arr) {
    let longestLength = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i].length > longestLength){
            longestLength = arr[i].length;
        }
    }
    return longestLength;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
