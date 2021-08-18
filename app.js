const express =require('express')
const http = require('http');
const inquirer = require('inquirer');
const util =require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);



// server set up for incoming requests set for call back function 
const server = http.createServer ((req,res) => {
if (req.url ==='/') {
res._write("hello World");
res.end();
}
if (req.url ==='/api/???') {
    res.write.apply(JSON.stringify([1,2,3]));
    res.end();  
}

});

// Set function to run
server.listen(3000);



