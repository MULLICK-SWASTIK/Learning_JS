//For any kind of doubt and confusion refer to "javascript mdn"


const name = "swastik"
const repoCount = 5

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} including the private repos`); //String interpolation, try to follow this pattern at all cost

const gameName = new String('swastik-Go')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newStr = gameName.substring(2, 6) //                              substring doesn't accepts negative value, if passed negative values as parameter then it will ignore and start from 0
console.log(newStr);

// const anStr = gameName.slice(0, 4);
const anStr = gameName.slice(-10, 6); //output: swasti              slice accepts negative values
console.log(anStr);

const newString = "      swastik.      "
console.log(newString);
console.log(newString.trim());


const url = "https://swastik.com/swastik%20mullick"

console.log(url.replace('%20', '-'));
console.log(url.includes('swastik'));
console.log(url.includes('jeet'));


const newName = new String('swastik-Go-run-leap-x-y-z-q-w-e-r-t-y-u-j')
// let arr=newName.split('-', 10)
let arr=newName.split('-')
console.log(arr);









