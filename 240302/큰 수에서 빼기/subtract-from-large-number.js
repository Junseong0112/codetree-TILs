const fs = require('fs');
const input = fs.readFileSync(0).toString().split(' ').map(Number);

let a = input[0]
let b = input[1]

if(a > b){
    console.log(a - b)
}else if(a < b){
    console.log(b - a)
}else{
    console.log(a)
}