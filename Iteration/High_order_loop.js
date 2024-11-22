//for of
//iterating array using for of
const arr = [1, 2, 3, 4]
for (const element of arr) {
    // console.log(element);
}

//iterating string using for of
const name = "Ritik"
for (const val of name) {
    // console.log(val);

}

//MAPS=> it store unique key in JS
const map = new Map();
map.set("IN", "India")
map.set("Usa", "united states of america")
map.set("Fr", "France")
map.set("IN", "India")
console.log(map);
// Map(3) {
//     'IN' => 'India',
//     'Usa' => 'united states of america',
//     'Fr' => 'France'
//   }

for (const [key, val] of map) {
    console.log(key + "=>" + val);

}

//by for of loop we cannot iterate objects

//FOR IN loop=>can iterate object,arrays but cannot iterate map and it give keys
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //it will not get iterate using for in loop
// }
