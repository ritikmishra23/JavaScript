// Scope=> Everything within curly braces is scope.
// Scope is of two types=> 1. Global 2.Block scope.
// In browser global scope is different from code environment Node JS

// let a = 10
// const b = 20
// var c = 40

// if (true) {

//     let a = 100
//     const b = 200
//     var c = 400
// }
// console.log(a);//10
// console.log(b);//20
// console.log(c);//400

let s = 10//Global scope
var t = 20
const u = 30

if (true) {
    //block scope
    console.log(s);//10
    console.log(t);//20
    console.log(u);//3-
    let a = 100
    const b = 200
    var c = 400
}
//console.log(a);//ReferenceError: a is not defined
//console.log(b);//ReferenceError: b is not defined
console.log(c);//400

//Nested scope
function one() {
    const username = "Ritik"

    function two() {
        const website = "Youtube"
        console.log(username);//Ritik

    }
    // console.log(website);//ReferenceError: website is not defined
    two()

}
one()


// +++++++++++++++++ intersting ++++++++++++++
console.log(addone(5));//6
console.log(addTwo(6));//ReferenceError: Cannot access 'addTwo' before initialization

function addone(num) {
    return num + 1
}

const addTwo = function (num) {
    return num + 2
}

//console.log(addone(5));//6
//console.log(addTwo(6));//8




