//String to Number
let score = "Ritik";
console.log(typeof score); //string
console.log(typeof (score)) //string
let number = Number(score) //type conversion
console.log(number); //NaN, Not a Number
console.log(typeof number); //number

//Number to String
let num = 33;
console.log(typeof num)
let scor = String(num) //conversion to string
console.log(typeof scor) //string
console.log(scor); //33

/// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

//Number to Boolean
let isLoggedIn = 2;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true
console.log(typeof booleanIsLoggedIn); //boolean

// 1 => true; 0 => false
// "" => false; null,undefined,NaN=>false
// "Ritik" => true..



