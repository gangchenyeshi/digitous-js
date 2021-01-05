var fs =require("fs");
/*
fs.readFile("./read.txt", function(error, data) {
    if(error) { //if i can't find the read.txt then show this message
        console.log("I can't found this file");
        return;
    }
    console.log(data.toString());// redirect to read.txt for read file only.
});
*/
fs.readFile("./jour07.txt", function(error, data) {
    //console.log(data.toString());
    var names = JSON.parse(data.toString());
    
    //console.log(names[0].name);
})