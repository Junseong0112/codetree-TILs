const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let num = input.map((x) => Number(x.replace(/\D/g, "")))
let plus = num.reduce((acc, cur) => acc + cur, 0)
console.log(plus)