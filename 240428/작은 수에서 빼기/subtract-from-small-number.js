const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let Max = Math.max(input[0], input[1]);
let Min = Math.min(input[0], input[1]);


console.log(Min - Max)