//as we know we cannot return for each 
//filter can return value based on condition

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const value = (num.filter((val) => val));
console.log(value);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

const val = num.filter((val) => val > 5)
console.log(val);//[6,7,8,9]

//if we open scope i.e. curly braces in arrow function then for returning value we use return keyword
const n = num.filter((val) => {
    return val < 7

})
console.log(n);//[ 1, 2, 3, 4, 5, 6 ]

//implementing filter using for each
const newNum = []
num.forEach((val) => {
    if (val > 5)
        newNum.push(val)
})
console.log(newNum)//[ 6, 7, 8, 9 ]

//question
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
//find book whose genre is history
const ebooks = books.filter((val) => val["genre"] == "History")
//console.log(ebooks);

//find book published after 2010
const book = books.filter((val) => { return val.publish > 2010 })
//console.log(book);

//find book published before 2010
const b = books.filter((val) => val["publish"] < 2010)
console.log(b);





