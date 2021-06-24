console.log(Math.pow(2,3)); // 2 ** 3 = 8

console.log(Math.round(0.6)); // 0.6 = 1
console.log(Math.round(0.4)); // 0.4 = 0

console.log(Math.ceil(0.9)); // round up to an intfeger

console.log(Math.floor(0.1)); // round down to an integer

console.log(Math.abs(-345)); // Absolute value of -345

console.log(Math.max(90, 789 , 234)); // Return the largest argument 

console.log(Math.min(23, 2, 0)); // Return the smallest argument


// To get random numbers between 2 numbers inclusive

// min = Math.ceil(min);
// max = Math.floor(max);

// console.log(Math.floor(Math.random() * (max - min) + min));

// min = Math.ceil(min);
// max = Math.floor(max);

// console.log(Math.floor(Math.random() * (max - min) + min));

console.log(Math.PI); // circumference of a circle over the diameter

console.log(Math.sqrt(45));

// Do the cube root of a number 

console.log(Math.pow(234, 1/3)); // 234 ** (1/3);

var multiLineString = "This is the day that the Lord\
has made! We will rejoice and be\
glad in him!";

console.log(multiLineString);

// the global objects when the javascript interpreter starts includes
// global constants like: undefined, Infinity and NaN
// global functions like isNaN(), parseInt()
// isNaN() and parseInt()

// Page 43

let s = 'hello';

console.log(s.toUpperCase());
s;

// page 44

let a = []; // a refers to an empty array

let b = a; // now b also references the same array

b[0] = 1;

console.log(a[0]);

console.log( a === b); // will be true since they reference the same object