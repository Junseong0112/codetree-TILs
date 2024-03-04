const fs = require("fs");
const input = fs.readFileSync(0).toString();

let n = Number(input);

if(n >= 100){
    console.log('vapor')
}else if(n < 0){
    console.log('ice')
}else{
    console.log('water')
}