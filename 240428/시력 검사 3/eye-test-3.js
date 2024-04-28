const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = Number(input[0])
const B = Number(input[1])

if(A >= 1 && B >= 1){
    console.log('H')
}else if(A >= 0.5 && B >= 0.5){
    console.log('M')
}else{
    console.log('L')
}