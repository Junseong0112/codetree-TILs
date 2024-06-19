const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const arr = Array(10).fill(0)
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = A * B * C;

let sumArr = sum.toString().split('').map(Number)
sumArr.forEach((v) => {
    arr[nums.indexOf(v)]++
})

console.log(arr.join('\n'))