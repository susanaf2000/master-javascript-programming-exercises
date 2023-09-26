function isOddWithoutModulo(num) {
    num = Math.floor(num);

    if(num === 0) return false;
    else if (num < 0) return isOddWithoutModulo(-num);
    else return (num % 10) % 2 !== 0;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
