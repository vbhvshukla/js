function addTwoNumbers(a,b){
    let result = a+b;
    return result;
}
const result = addTwoNumbers(3,5);
// console.log(result)

function greetUser(username = "User"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `Hi there! ${username}`;
}
// console.log(greetUser());

//Passing parameters

function calculateCartPrice(...num){
    return num;
}
// console.log(calculateCartPrice(2,400,500));

function calculateCartPrice(val1,val2,...num){
    return num;
}
// console.log(calculateCartPrice(2,400,500,2000));

//Passing object in function


const user = {
    username : "Vaibhav",
    price : "199"
}

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`)
}

// handleObj(user);

//Passing arrays in function

const myArr = [100,200,300,400,500,600];

function returnSecondVal(arr){
    return arr[2];
}

console.log(returnSecondVal(myArr));
