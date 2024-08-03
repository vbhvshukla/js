//Array
const myArr = [0,1,2,3,4,5];
console.log("Array ",myArr);


const myNA = myArr.slice(0,2); // 3rd element non inclusive
console.log("After slice ",myArr);
console.log("Value of myNA ",myNA);

const myNNA = myArr.splice(0,2); 
console.log("After splice ",myArr);
console.log("Value of myNNA ",myNNA);