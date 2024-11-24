const num = [1, 2, 3, 4, 5, 6, 7]
//add 10 in each value
const a = num.map((val) => val + 10)
//console.log(a);

//chaining=> using more function at a time , using map and filter together

let b = num.map((val) => val * 10).map((val) => val + 1)
console.log(b);//[11, 21, 31,41, 51, 61, 71]
b = num.map((val) => val * 10).map((val) => val + 1).filter((val) => val >= 40)
console.log(b);//[ 41, 51, 61, 71 ]

