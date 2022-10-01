var fs = require("fs");

for(var i=0;i<10;i++)
{
    console.log("Writing...");
    fs.appendFile("info.txt","\nappending node JS...",function(err){
    if(err)
    console.error(err);
    console.log("Done")
})

}