function transformEmployeeData(array) {
  let transformedData = [];

  for(let i = 0; i < array.length; i++) {
    let employee = {};

    for(let j= 0; j < array[i].length; j++) {
      let key = array[i][j][0];
      let value = array[i][j][1];

      employee[key] = value;
    }
    transformedData.push(employee);
  }
  return transformedData;
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
