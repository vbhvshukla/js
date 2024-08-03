//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof undefined);

// https://262.ecma-international.org/5.1/#sec-11.4.3

let yt = "hello"
let anotheryt = yt

//Here we changed anotheryt  but it won't change yt because its a call by value and is a primitive data type
anotheryt = "someeeee"
// console.log(yt);
// console.log(anotheryt);

//Let's try non primitive data type if we copy user to UserTwo then if we change UserTwo's email it would change user's email

let user = {
    email : "user@google.com",
    password : "abc@123"
}
console.log(user.email);
let UserTwo = user;

UserTwo.email = "Someone@google.com"

console.log(user.email);














