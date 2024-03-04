const fs = require('fs');
const input = fs.readFileSync(0).toString();

let a = Number(input);

console.log(a === 100 ? 'pass' : 'failure')