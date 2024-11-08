const score = 100;
console.log(score);

//Another way of declaring number
const balance = new Number(100.27)
console.log(balance);

//converting number to string
console.log(balance.toString().length);
console.log(balance.toFixed(1));//It fix number after decimal place
//100.3

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5));//It fix total no. of digit 123.90

const hundreds = 10000000
//If we want to add comma
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000

//***********************MATHS in JS *****************/

console.log(Math);
console.log(Math.abs(-4)); //give always positive value
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//Random function->> Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//Suppose we want value between a range then-
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





