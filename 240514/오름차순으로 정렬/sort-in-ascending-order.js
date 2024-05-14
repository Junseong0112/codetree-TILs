const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const num = input[1].split(' ').sort((a,b) => a - b).join(' ');
console.log(num)