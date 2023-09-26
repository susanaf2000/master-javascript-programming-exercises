function multiply(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    
    let product = 0;
    let isNegative = (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);
    
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    
    if (num1 > 0) {
        for (let i = 0; i < num1; i++) {
                product += num2;
        }
    }
    
    return isNegative ? -product : product;
} 


let output = multiply(4, 7);
console.log(output); // --> 28
