//Object in Js can be created in 2 ways=> using Literals and using Constructor
//Constructor object(Singleton)=> Object.create

//Object literals
const user = {
    name: "Ritik",
    "full name": "Ritik Mishra",
    age: 21,
    location: "Ghaziabad"
}
//Keys are treated as String
//We can acccess value in 2 ways
console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);//only way to access it we cannot use . operator to access it


//adding Symbol in object
const mySym = Symbol("key1")//first declare
const symbol = {
    [mySym]: "123"
}
console.log(symbol[mySym]);//123
console.log(typeof mySym);//symbol

console.log(symbol);//{ [Symbol(key1)]: '123' }

//Object.freeze(symbol)=> after this statement we cannot change value and we cannot add value in given object
// Object.freeze(symbol)
symbol.name = "Ritik"// adding new key in object
console.log(symbol);

user.greeting = function () {
    console.log("Hello");

}
console.log(user);
// {
//     name: 'Ritik',
//     'full name': 'Ritik Mishra',
//     age: 21,
//     location: 'Ghaziabad',
//     greeting: [Function (anonymous)]
//   }
console.log(user.greeting)//[Function (anonymous)]
console.log(user.greeting())//Hello

user.greeting2 = function () {
    console.log(`hello ${this.name}`);//using String interpolitation

}
console.log(user.greeting2);//[Function (anonymous)]
console.log(user.greeting2());//hello Ritik



