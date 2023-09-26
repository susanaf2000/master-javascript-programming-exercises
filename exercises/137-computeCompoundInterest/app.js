function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  let amount = principal * (Math.pow((1 + (interestRate / compoundingFrequency)), (compoundingFrequency * timeInYears)));
  let interest = amount - principal;
  return interest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
