const fs = require('fs');

fs.readFile('./Day 2/input.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString())
})