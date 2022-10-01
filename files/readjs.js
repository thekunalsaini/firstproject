var fs = require("fs");
console.log("reading...");
fs.readFile("info.txt",function(err,data){
    if(err)
    console.error(err);
    console.log("Done Read : " + data.toString());
})
