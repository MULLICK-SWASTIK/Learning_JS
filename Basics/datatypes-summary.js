// // Primitive

// /* 7 types : 
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
// */
// const score = 100
// const scoreValue = 3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const diffId = Symbol('123')
// console.log(id === diffId);

// // const bigNumber = 1313213212156466468778317821n

// // Reference (Non primitive)
// // Array, Objects, Functions

// const heros = ["kld", "jdsf", "sdkf"]
// let myObj = {
//     name: "swastik",
//     age: 20
// }

// const myfunction = function () {
//     console.log("Hello World");
// }

// // console.log(typeof bigNumber);
// // console.log(typeof outsideTemp);
// // console.log(typeof myfunction);
// console.log(typeof heros);

//----------------------------------------------------------------------------------------------------------------
// Stack (Primitive) : gets a copy, Heap (Non-Primitive) : gets a reference


let myGitHubName = "mullickdashswastik"
let anotherName = myGitHubName
anotherName = "mullick-swastik"

console.log(myGitHubName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "swastik@google.com"

console.log(userOne.email);
console.log(userTwo.email);