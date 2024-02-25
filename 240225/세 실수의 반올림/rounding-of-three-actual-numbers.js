const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n')
input = input.map(x => Number(x).toFixed(3));

console.log(input[0])
console.log(input[1])
console.log(input[2])