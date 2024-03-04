const fs = require("fs");
const input = fs.readFileSync(0).toString();

let a = Number(input)

if (a >= 1){
    console.log('High')
}else if(a < 1 && a >= 0.5){
    console.log('Middle')
}else{
    console.log('Low')
}