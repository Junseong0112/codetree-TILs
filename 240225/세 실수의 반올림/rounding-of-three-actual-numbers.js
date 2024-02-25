const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n')
input = input.map(Number);

for(let i = 0; i < input.length; i++){
    console.log(input[i].toFixed(3))
}