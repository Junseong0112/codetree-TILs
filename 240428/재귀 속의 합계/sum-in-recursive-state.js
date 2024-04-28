const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim())

let num = 1;
let plus = 1;

while(num !== input){
    num++
    plus = num + plus
}

console.log(plus)