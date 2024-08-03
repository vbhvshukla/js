//Declaration
const name = "Vaibhav"
const gitRepo = 10
const gameName = new String('Vaibhav'); //Gives a object
const something = "           vaibhav";//trim testing
const url = "https://vaibhav.com/vaibhav%20choudhary" //if there's a space browser automatically encodes %20 

// console.log(name + gitRepo + "Hello there");

//String interpolation putting string in between ``
// console.log(`Hello there ${name} and my repo count is ${gitRepo}`)

// console.log(gameName.substr(1,3))// outputs ai as 3 is not inclusive

// console.log(gameName.slice(-6,5)) //outputs ai as 3 is not included  negative denotes from the back of the string and bascially the same

// console.log(something.trim()) //eliminiates extra spaces
//Testing url's replace
// console.log(url)
const somethingg = url.replace('%20','-'); 
// console.log(somethingg);

//Split
console.log(something.split('/'));