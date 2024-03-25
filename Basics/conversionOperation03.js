// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = "abc"
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score)

console.log(typeof valueNumber);
// console.log(valueNumber+" - Not a Number");
console.log(valueNumber);

/*
"33" -> 33
"33abc" -> NaN
true -> 1; false ->0
*/

// let isLoggedIn = 1
let isLoggedIn = "swastik"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);