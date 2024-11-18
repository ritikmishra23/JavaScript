// this refers to current Context. 
// In browser this refer to window Object.
const user = {
    username: "Ritik",
    age: 22,
    message: function () {
        //console.log(`${this.username}, welcome`);
        console.log(this)//{ username: 'Ritik', age: 22, message: [Function: message] }

    }

}
user.message()
console.log(this)//{}

//this in function
function name() {
    let username = "Ritik"
    // console.log(this.username);//undefined
    // console.log(this);


}
name()

//ARROW FUNCTION
const names = () => {
    let username = "Ritik"
    console.log(this.username);//undefined
    console.log(this);//{}


}
names()

//passing parameter in arrow function

// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(1, 3));//4

const add = (num1, num2) => num1 + num2//When an arrow function has only a single expression, the result of that expression is implicitly returned
//OR
const add1 = (num1, num2) => (num1 + num2)
console.log(add(1, 5));//6
console.log(add1(1, 5));//6

//in arrow function if we use curly braces then we have to use return statement


