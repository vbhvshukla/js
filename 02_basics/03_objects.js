//If made from constructor it would be a singleton

//Object literals
//Object.create -> for making singleton 

//Smybol gives a unique object
const mySym = Symbol("key1");

const user = {
    [mySym]:"key1", //way to use symbol as a key in object
    name : "Vaibhav",
    age : 22,
    location : "Lucknow",
    email : "Someone@example",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(user[mySym])

// console.log(user.email);
// console.log(user["email"]);

user.greetings = function(){
    console.log(`Hello there , ${this.name}`);
}

user.greetings();

console.log(user.greetings);