//file system
//we are using fs library
const fs = require('fs');
//callback function (err,data)
fs.readFile('lorem-ipsum.txt', 'utf8', (err, data) => {
    if (err) {return console.log(err);
    }
    
    console.log(data);});
//rename the file
    const path = require("path");
    //(err) => {}
    fs.rename('lorem-ipsum.txt','gibberish.txt',function(err){
        if(err){
            console.log('Error: ' + err );
            throw err;
        }
        console.log('File renamed yay!!');
    });