const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

let arr = [];
arr.push(...A, ...B)
let sortedArr = arr.sort((a,b) => a-b)
console.log(sortedArr.join(' '))