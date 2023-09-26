function isRotated(str1, str2) {
  if (str1,length !== str2.length) return false;

  let q1 = [];
  for (let i =0; i < str1.lenght; i++) {
    q1.push(str1[i]);
  }

  let q2 = [];
  for(let i = 0; i < str2.length; i++) {
    q2.push(str2[i]);
  }

  let k = str2.length;

  while (k--) { 
    let ch = q2[0];
    q2.shift(); //removes the first char from the q2
    q2.push(ch); // adds the removed char to the end of q2
    if(JSON.stringify(str2) === JSON.stringify(str1)) return true;
  }
  return false;
}
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
