const fs = require('fs');
let input = fs.readFileSync(0).toString().split("\n");
let arr = input.map(Number);
console.log(arr[0], arr[1])