const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('.').map(Number);

const year = input[0];
const month = input[1];
const day = input[2];

console.log(`${month}-${day}-${year}`)