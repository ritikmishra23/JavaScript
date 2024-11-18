
function sayMyName() {
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ritik"))
// console.log(loginUserMessage("Ritik"))

//Shopping cart=>we do not know how many product will user in cart. So we use rest operator
//Rest operator=> give all item in a single bundle. Notation=> ...
function calculateCartPrice(...num1) {
    return num1

}
console.log(calculateCartPrice(100, 200, 300))//[ 100, 200, 300 ]

function calculateCartPrice(val1, val2, ...num1) {
    return num1

}
console.log(calculateCartPrice(100, 200, 300, 400, 500))//[ 300, 400, 500 ]

//Passing object
const user =
{
    username: "Ritik Mishra",
    price: 200
}
function handleObject(object) {
    console.log(`username is ${object.username} and price is ${object.price}`)
}
handleObject(user)//username is Ritik Mishra and price is 200


