const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let wordLength = parseInt(input[0]);
let arr = [];

for(let i = 1; i <= wordLength; i++){
    arr.push(input[i])
}

console.log(arr.sort((a,b) => a.length - b.length).join('\n'))