const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const santance = input[0].split(' ');
let word = santance[1]

for(let i = 1; i < input.length; i++){
    if(input[i].includes(word)){
        console.log(input[i])
    }
}