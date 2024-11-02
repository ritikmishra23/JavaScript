const accountId = 12345;
var email = "ritik@gmail.com";
let password = 123457;
city = "Delhi"
let abc; //It will print undefined as output in javascript if we try to print abc variable.

//accountId = 123; this is not allowed we can not change value of const variable.
console.log(accountId)
email = "ritikmishra@google.com"
password = 1234;
city = "Noida";
console.table([accountId, email, password, city, abc])

/*
Prefer not to use var because of issue in block space and functional space.   
*/