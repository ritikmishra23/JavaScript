// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
// console.log(myArr); //[
//     0, 1, 2, 3,
//     4, 5, 6, 7 
//   ]

// myArr.pop() remove elment from back

// myArr.unshift(9)=> add element from starting/front in array
// myArr.shift()=>delete element from starting/front in array


// console.log(myArr.includes(9)); => Check whether value is present or not. return boolean value
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()=> convert all value of array into single string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);
// output=> A  [
//     0, 1, 2, 3,
//     4, 5, 6, 7 
//   ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);//[ 1, 2 ] 

console.log("B ", myArr);
/* B  [
  0, 1, 2, 3,
  4, 5, 6, 7
]     */


const myn2 = myArr.splice(1, 3)// it also changes our original array
console.log("C ", myArr);//C  [ 0, 4, 5, 6, 7 ]
console.log(myn2);//[ 1, 2, 3 ]