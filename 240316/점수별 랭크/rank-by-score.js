const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim())

if(input >= 90){
    console.log('S')
}else if(input <= 89 && input >= 80){
    console.log('A')
}else if(input <= 79 && input >= 70){
    console.log('B')
}else if(input <= 69 && input >= 60){
    console.log('C')
}else{
    console.log('F')
}