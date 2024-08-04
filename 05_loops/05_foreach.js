const arr = ["Hello","There","How","Are","You","?"];
// arr.forEach((item)=>{
//     console.log(item);
// });

// arr.forEach((value,index,arr)=>{
//     console.log("The value that we get :: ",value);
//     console.log("The index that we get :: ",index);
//     console.log("The arr that we get :: ",arr);
// })


const myCoding = [
    {
        languageName : "JavaScript",
        abbr :"js"
    },
    {
        languageName : "CPP",
        abbr :"cpp"
    },
    {
        languageName : "C",
        abbr :"c"
    },
    {
        languageName : "Java",
        abbr :"java"
    }
]
// myCoding.forEach((item)=>{
//     //we have the access of an object
//     console.log(item.abbr);
// })

const coding = ["js","cpp","c","java"];

//Does not return any value hence undefined
const values = coding.forEach((item)=>{
    return item;
})

console.log(values);