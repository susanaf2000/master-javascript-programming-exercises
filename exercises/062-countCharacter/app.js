function countCharacter(str, char) {
    let count = 0;
    for (let i= 0; i < str.length; i++) {
            if(str.charAt(i) == char) {
                count++;
            }
    }
    return count;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
