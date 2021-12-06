var fs = require("fs");

// mode asynchrone

// console.log("je vais lire input.txt");

// fs.readFile('input.txt','utf-8', function(err,data) { console.log(data.toString()) });

// console.log("je continue");


//mode synchrone

 var data = fs.readFileSync('input.txt');
 console.log( data.toString() );

 console.log("je continue");