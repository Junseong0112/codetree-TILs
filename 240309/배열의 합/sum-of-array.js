const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for(let i = 0; i < 4; i++){
    console.log(input[i].split(' ').reduce((acc, cur) => acc + Number(cur), 0))
}