function isEvenWithoutModulo(num) {
    num = Math.floor(num);

    if(num === 0) return true;
    else if(num < 0) return isEvenWithoutModulo(-num);
    else return (num % 10) % 2 === 0;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
