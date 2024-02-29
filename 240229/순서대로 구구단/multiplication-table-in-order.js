const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let A = input[0];
let B = input[1];

for(let i = 1; i <= 9; i++){
    console.log(`${A} * ${i} = ${A * i}  ${B} * ${i} = ${B * i}`)
}