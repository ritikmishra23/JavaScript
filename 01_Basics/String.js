const name = "Ritik"
const count = 50
console.log(name + count + " Century"); //But this is Older version of Concatenation in JS

//Concatenation-> Use back tick and create placeholder ${}
console.log(`Hello my name is ${name}`);

//  We can also use inbuilt property in placeholder e.g. we want to calculate length
console.log(`Hello my name is ${name.length}`);

//Another way of declaring String
const gameName = new String('Ritik-Mishra')
console.log(gameName[0]) //R
console.log(gameName.__proto__); // {}

console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, -2) //sh
console.log(anotherString);

const newStringOne = "   Ritik    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove space from both side

const url = "https://ritik%20@.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('@.')) //check wheter this word is present or not 

console.log(gameName.split('-'));//[ 'Ritik', 'Mishra' ]






