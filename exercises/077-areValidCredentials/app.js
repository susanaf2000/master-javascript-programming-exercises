function areValidCredentials(name, psswd) {
    if(name.length > 3 && psswd.length > 8) return true;
    else return false;

}
let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);