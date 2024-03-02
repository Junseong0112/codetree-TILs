const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let a = input[0] * 0.01
let b = input[1]
let c = Math.floor(b / (a * a))

console.log(c)

if(c >= 25){
    console.log('Obesity')
}