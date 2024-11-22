//In for each loop we pass callback function(remove name of function) and also arrow function
//for each is higher order function

//iterating array using callback function
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    // console.log(val);
})


// using arow function
coding.forEach((item) => {
    // console.log(item);
})

//iterating using function
function printMe(item) {
    //console.log(item);
}
//coding.forEach(printMe)//passing function, give reference

//for each also brings item,index and full array
coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(function (val) {
    //console.log(val.languageName)
})
//output
// javascript
// java
// python

//for each loop does not return any value
const player = ["Ritik", "Virat", "Sachin"]
const value = player.forEach((item) => {
    // console.log(item);
    return item;
})

console.log(value);//undefined

