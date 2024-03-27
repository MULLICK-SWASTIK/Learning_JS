//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// let myArbDate = new Date(2023, 0, 23) //months start from zero in JavaScript
// console.log(myArbDate.toDateString());
// let myArbDate = new Date(2023, 0, 23, 5, 51, 24)
let myArbDate = new Date("2023-01-14")
// let myArbDate = new Date("14-02-2024")
console.log(myArbDate.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myArbDate.getTime());
console.log(Math.floor(Date.now()/1000));

