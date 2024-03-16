const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let m = Math.pow(input[0] * 0.01, 2);
let kg = input[1];
let total = Math.floor(kg / m)

console.log(total)
if(total >= 25){
    console.log('Obesity')
}