const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('-');
input = input.map(Number)

const year = input[2]
const month = input[0]
const day = input[1]

console.log(`${year}.${month}.${day}`)