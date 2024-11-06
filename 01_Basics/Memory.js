//Memory is of 2 type Stack and Heap memory

//Primitive datatype copy is passed, changes are done on copy
let player = "Virat Kohli"
let player1 = player;
player1 = "Sachin Tendulkar"

console.log(player);
console.log(player1);

//IN Reference DataType(Non-Primitive datatype) Original reference is passed.
let players = {
    Name: "Ritik",
    age: 22

}
let players1 = players;
players1.age = 21; // this change is passed to both object players and players1 because both are pointing(referencing) same thing in heap memory
console.log(players);
console.log(players1);




