const score = 400
const balance = new Number(100.12313123);

// console.log(score);
// console.log(balance);

// console.log(balance.toFixed(2)); //outputs 100.12 only
// console.log(balance.toPrecision(3)); //priorty given to non decimal numbers for precision 2 otput is 1.0e+2 for 3 it is 100

// const hundreds = 10000000

// //to know how many zeroes are there

// console.log(hundreds.toLocaleString()); //outputs 10,000,000
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


