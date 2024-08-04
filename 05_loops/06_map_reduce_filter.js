// const arr = [1,2,3,4,5,6,7,8,9];
// const values = arr.filter((num)=>{
//     return num>4;
// })
// console.log(values);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
//Get all books which have been published after 1970
// console.log(books.filter((book) => book.publish>'1970' && book.genre=='History'));

//Get all books whose genre is history
// console.log(books.filter((book)=>{
//     return book.genre==="History"
// }))

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Add 10 to every number in myNums array

// console.log(myNums.map((num)=>num+10));

//Chaining

const newNum = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 10)
                    .filter((num)=>num>40);
// console.log(newNum);

//REDUCE
const arrone = [1,2,3];
const initialValue = 0;
console.log(
    arrone.reduce((prevVal,currVal)=>{
        console.log("Prev val:: ",prevVal);
        console.log("Curr val:: ",currVal);
        return prevVal + currVal
    },initialValue)
);