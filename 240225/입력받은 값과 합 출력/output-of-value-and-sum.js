const fs = require('fs');
let input = fs.readFileSync(0).toString();
let arr = input.split(' ').map(Number);
console.log(arr[0], arr[1], arr[0] + arr[1])