const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let wordLength = parseInt(input[0]);
let arr = [];

for(let i = 1; i <= wordLength; i++){
    arr.push(input[i])
}

arr = arr.sort((a, b) => {
    if(a.length === b.length){
        return a.localeCompare(b)
    }
    return a.length - b.length
}).join('\n')

console.log(arr)