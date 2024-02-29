const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(':')

let h = parseInt(input[0])
let m = parseInt(input[1])

h = h + 1;
console.log(`${h}:${m}`)