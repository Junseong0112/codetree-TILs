const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let wordArr = [];
for(let i = 1; i < input.length; i++){
    wordArr.push(input[i]);
}

let word = wordArr.join('');
let wordLength = word.length;
let halfLength = Math.floor(wordLength / 2);
let str = '';

for(let i = 0; i < word.length; i++){
    str += word[i];
    if(str.length === halfLength){
        console.log(str);
        str = '';
    }
}