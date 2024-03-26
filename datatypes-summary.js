// Primitive

/* 7 types : 
String
Number
Boolean
null
undefined
Symbol
BigInt
*/
const score = 100
const scoreValue = 3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const diffId = Symbol('123')
console.log(id === diffId);

const bigNumber = 1313213212156466468778317821n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["kld", "jdsf", "sdkf"]
let myObj = {
    name: "swastik",
    age: 20
}

const myfunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);