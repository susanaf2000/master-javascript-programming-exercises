function computeSumBetween(num1, num2) {
    if(num1 >= num2) return 0;

    let product = 0;
    for( let i= num1; i < num2; i++){
        product += i;
    }
    return product;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
