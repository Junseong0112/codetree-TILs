const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');
input = input.map(Number)
let A = input[0]
let B = input[1]

console.log((A + B).toFixed(2))