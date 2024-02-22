const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', (line) => {    
  input.push(line)
}).on('close', () => {
    const Input = input[0];
    let answer = "";

    for (let i = 1; i <= Input; i++) {
    answer = "";
    for (let j = 1; j <= Input; j++) {
        answer += j;
    }
    console.log(answer);
    }
});