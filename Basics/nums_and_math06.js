// const score = 400
// console.log(score);

// // const balance = new Number(100)
// const balance = new Number(100.041)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(typeof balance.toFixed(2));
// console.log(Number(balance.toFixed(2)));
// console.log(typeof Number(balance.toFixed(2)));

// const otherNum = 56.515
// console.log(otherNum.toPrecision(4));
// // console.log(otherNum.toPrecision(3));
// // console.log(otherNum.toPrecision(2));
// // console.log(otherNum.toPrecision(1));

// const hundreds=100000000
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());


//----------------------------------------------------Mathematics------------------------------------------------

console.log(Math);
console.log(Math.abs(-4)); //always gives the positive magnitude
console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.2));
console.log(Math.min(5, 2, 4, 8, 6));
console.log(Math.max(5, 2, 4, 8, 6));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
// Formula : Math.random() * (max - min + 1) + min, where min is the lowest value of the interval and max is the highest value of the interval
console.log(Math.random() * (max - min + 1) + min)


