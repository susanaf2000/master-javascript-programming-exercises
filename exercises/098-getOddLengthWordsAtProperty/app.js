function getOddLengthWordsAtProperty(obj, key) {
    if (key in obj && Array.isArray(obj[key])) {
        return obj[key].filter((element) => typeof element == 'string' && element.length % 2 !== 0);
    }
    else return [];
}
let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output);