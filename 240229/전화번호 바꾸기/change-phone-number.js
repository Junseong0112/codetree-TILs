const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('-').map((el, i) => i !== 0 ? Number(el) : el);

const head = input[0];
const mid = input[1];
const tail = input[2];

console.log(`${head}-${tail}-${mid}`)