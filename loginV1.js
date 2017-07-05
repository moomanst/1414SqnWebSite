const hasha = require('hasha');
var uname = prompt("Enter a Username");
console.log(uname);
var pword = prompt("Enter a Password");
console.log(pword);
var phash = hasha(pword);

if (uname == 'max') {
  console.log("Access Granted : Stage 1")
  
}
else {
  console.log("Access Denied : Stage 1")
}
if (phash == hasha('hello123') ){
  console.log("Access Granted : Stage 2")
  var token = (Math.random())
}
else {
  console.log("Access Denied : Stage 2")
  
}
console.log(token)
