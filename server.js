// var fs = require('fs');
// var os = require('os')
// var user= os.userInfo();

// console.log(user.username);

// fs.appendFile("greeting.txt", `Hi ${user.username} \n`, ()=>{
//     console.log("file created");
// } );
// console.log(fs);

var _ = require('lodash');

// const notes = require('./notes.js')
// var age= notes.age;
// console.log(age);

// var result= notes.addNumber(age+6,2,4);
// console.log(result);

var data = ["person", "person", 1,2,1,2, "name","age","2"];

const filter = _.uniq(data);
console.log(filter);


