function findShortestOfThreeWords(word1, word2, word3) {
    let shortestWord = " ";

    if(word1.length <= word2.length && word1.length <= word3.length){
        shortestWord = word1;
    } else if (word2.length <= word1.length && word2.length <= word3.length){
        shortestWord = word2;
    } else {
        shortestWord = word3;
    }
    return shortestWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
