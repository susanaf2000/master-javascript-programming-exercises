function findMaxLengthOfThreeWords(word1, word2, word3) {
    let length1 = word1.length;
    let length2 = word2.length;
    let length3 = word3.length;

    let maxLength = Math.max(length1, length2, length3);

    return maxLength;
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);