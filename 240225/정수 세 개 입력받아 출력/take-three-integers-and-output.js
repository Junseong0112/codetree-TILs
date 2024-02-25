const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let firstArr = input[0].split(' ').map(Number);
let secondArr = Number(input[1])

console.log(firstArr[0], firstArr[1], secondArr)