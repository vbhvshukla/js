const user = {
}

user.id = "123abc";
user.name = "Sammy"
user.isLoggedin = false;

const regularUser = {
    email : "Someone@example.com",
    fullname : {
        firstname : "Vaibhav",
        lastname : "Shukla"
    }
}

const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"c", 4:"b"}

//merging two objects

const obj3 = Object.assign({},obj1,obj2);

//can also be used const obj3 = [...obj1,...obj2];
// console.log(obj3);


// console.log(regularUser.fullname?.firstname);

//Array of objects
const users =[
    {
        name:"Vaibhav"
    },
    {
        name:"Someone"
    },
    {
        name:"Temporary"
    }
]

//accessing values
// console.log(users[0].name);


//Some more methods

// console.log(Object.keys(user));

//Destructuring an array

const {name} = user;

console.log(name);