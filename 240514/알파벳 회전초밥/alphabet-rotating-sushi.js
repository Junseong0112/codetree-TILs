const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')
const word = input[1];

console.log(word.length)