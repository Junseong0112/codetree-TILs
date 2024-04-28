const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = Number(input[0])
const B = Number(input[1])

if (A === 0){
    if(B >= 19){
        console.log('M')
    }else{
        console.log('B')
    }
}else{
    if(B >= 19){
        console.log('W')
    }else{
        console.log('G')
    }
}