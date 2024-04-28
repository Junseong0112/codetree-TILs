const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

if(input === 0){
    console.log('zero')
    return;
}

if(input > 0){
    console.log('positive')
}else{
    console.log('negative')
}