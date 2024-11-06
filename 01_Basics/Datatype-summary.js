// how data is stored in memory and how we can access that data from memory 
//  on that basis datatype are of 2 types:-> Primitive And Reference

//PRIMITIVE- 7 types->String,Number,null,undefined,Symbol(for uniqueness),boolean,BigInt

const id = Symbol('123') //Symbol declaration
const anotherid = Symbol('123')
console.log(anotherid === id); //false

const bigNumber = 12344556667878787878787n;//BigInt declaration add n at last
console.log(bigNumber);

//REFERENCE(Non Primitive)=> Array,Objects,Functions

//Array
const player = ["Virat", "Rohit", "Dhoni", "Sachin"]

//Object
const obj = {
    name: "Ritik",
    age: 22,
}
console.log(player);
console.log(obj);

//function
const vari = function () {
    console.log("HI");

}

//TYPE OF FUNCTION
console.log(typeof bigNumber); //BigInt

console.log(typeof null); //object

//* Type of null is object
//JS is loosely typed language




