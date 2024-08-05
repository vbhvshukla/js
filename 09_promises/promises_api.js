// const promiseOne = new Promise((resolve, reject) => {
//   //Do any async task like
//   //DB Calls, Cryptography , Network calls
//   setTimeout(() => {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });
// //Consumption of promise
// promiseOne.then(() => {
//   console.log("Promise consumed");
// });

//Another way

// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log("Ran timeout");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Then ran");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       username: "Vaibhav",
//       email: "someone@example.com",
//     }); //to send data in then we can pass an object returned here in resolve
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiesFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "Vaibhav",
//         email: "someone@example.com",
//       });
//     } else {
//       reject("Error , something went wrong");
//     }
//   }, 1000);
// });

// promiesFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("Finally gets executed");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "Vaibhav",
//         email: "someone@example.com",
//       });
//     } else {
//       reject("Error , something went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive(){
//     try {
//         console.log(await promiseFive);
//     } catch (error) {
//         console.log("Error occurred");
//     }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error occurred");
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/vbhvshukla")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });
