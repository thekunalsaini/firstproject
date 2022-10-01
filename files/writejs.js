var fs = require("fs");
console.log("Writing...");
fs.writeFile("info.txt","Learning node JS...",function(err){
    if(err)
    console.error(err);
    console.log("Done")
})
