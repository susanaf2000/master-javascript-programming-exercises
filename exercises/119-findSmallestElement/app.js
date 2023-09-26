function findSmallestElement(arr) {
    if(arr.length < 1) return 0;
   
    let num = 100;
    for(let i of arr){
        if(i < num){
            num = i;
        }
    }
    return num;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1