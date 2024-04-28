const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

if(input >= 90){
    console.log('passed')
}else{
    console.log(`need ${90 - input} more score`)
}