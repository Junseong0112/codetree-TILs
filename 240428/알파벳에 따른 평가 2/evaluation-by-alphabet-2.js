const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const obj = {
    S : 'Superior',
    F : 'Fantastic',
    G : 'Good',
    U : 'Usually',
    E : 'Effort',
}

console.log(obj[input] || 'Failure')