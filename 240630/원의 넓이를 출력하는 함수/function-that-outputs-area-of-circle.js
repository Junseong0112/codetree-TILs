const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim())

const result = ((input * input) * 3.14).toFixed(2)
console.log(result)