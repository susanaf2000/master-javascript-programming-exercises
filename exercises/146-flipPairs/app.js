function flipPairs(input) {
    let flipped = '';

    for(let i=  0; i < input.length; i+= 2) {
        if(i + 1 < input.length) {
            flipped += input[i +1] + input[i];
        } else {
            flipped += input[i];
        }
    }
    return flipped;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
