const fs = require("fs");
const input = fs.readFileSync(0).toString();

let n = Number(input);

if(n >= 3000){
    console.log('book')
}else if(n < 3000 && n >= 1000){
    console.log('mask')
}else{
    console.log('no')
}