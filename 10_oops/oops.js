// //Object
// const user = {
//   name: "John Doe",
//   age: 30,
//   occupation: "Software Developer",
//   getUserDetails: function () {
//     console.log(`This user's username is ${this.name}`);
//   },
// };

// user.getUserDetails();

const user = {
    username: "John Doe",
    loginCount : true,
    isLoggedIn : true
}

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

console.log(new User("Vaibhav",true,true));
console.log(new User("Someone",false,true));