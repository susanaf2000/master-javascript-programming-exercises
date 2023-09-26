function calculateBillTotal(preTaxAndTipAmount) {
    let salesTax = preTaxAndTipAmount * 0.095;

    let tip = preTaxAndTipAmount * 0.15;

    let totalAmountDue = preTaxAndTipAmount + salesTax + tip;

    return totalAmountDue;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
