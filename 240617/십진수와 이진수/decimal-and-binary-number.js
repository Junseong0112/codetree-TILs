const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

let seventeen = parseInt(input, 2) * 17

console.log(seventeen.toString(2))