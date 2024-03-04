const fs = require("fs");
const input = fs.readFileSync(0).toString()

let a = parseInt(input);

console.log(a === 1 ? 't' : 'f')