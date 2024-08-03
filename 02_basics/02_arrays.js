const heros = ["thor","Ironman","Spiderman"];

const dc = ["superman","flash","batman"];

// heros.push(dc);
// console.log(heros); //outputs [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ] pushed an array as an element

//To merge two arrays use concat function

// let something = heros.concat(dc);

// console.log(something);

//Spread 
// let something = [...heros,...dc];

// console.log(something);
//If we have array like this and want to flat it
// const aA = [1,2,3,[4,5,6],7,[8,9,7,[10,11]]];

// const flattend = aA.flat(Infinity);

// console.log(flattend);

// console.log(Array.isArray("Hitesh"));

// //convert to array

// console.log(Array.from("Vaibhav"));

//How to convert these 3 into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))