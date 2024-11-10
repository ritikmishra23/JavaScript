// Date objects
let mydate = new Date();
console.log(mydate);

//converting date to string
console.log(mydate.toString()); //Sat Nov 09 2024 10:35:06 GMT+0530 (India Standard time)

console.log(mydate.toDateString()); //Sat Nov 09 2024 
console.log(mydate.toJSON()) //2024-11-09T17:52:54.918Z 
console.log(mydate.toLocaleString())//10/11/2024, 9:46:24 pm
console.log(typeof mydate); //object

let myCreatedDate = new Date(2024, 10, 10, 10, 5, 4)
console.log(myCreatedDate.toLocaleString());//10/11/2024, 10:05:04 am
let MyCreatedDate = new Date("2024-01-12")
console.log(MyCreatedDate.toLocaleString());//12/1/2024, 5:30:00 am

//TimeStamp in JS
let time = Date.now()// we get time in millisecond
console.log(time);//1731256320966
console.log(myCreatedDate.getTime());//1731213304000

//converting time in millisecond to second
console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
})
); //Sunday











