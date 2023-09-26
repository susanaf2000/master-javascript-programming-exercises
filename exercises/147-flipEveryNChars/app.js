function flipEveryNChars(input, n) {
    let flipped = '';

    for(let i = 0; i < input.length; i+= n) {
        let segment = input.slice(i, i + n);
        let reversedSegment = segment.split('').reverse().join('');
        flipped += reversedSegment;
    }
    return flipped;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
