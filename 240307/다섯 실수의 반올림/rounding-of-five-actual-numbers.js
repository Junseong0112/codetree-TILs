const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n').map(v => Number(v).toFixed(3));

console.log(input[0]);
console.log(input[1]);
console.log(input[2]);
console.log(input[3]);
console.log(input[4]);