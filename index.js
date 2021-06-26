// Destructuring Assignment ES6
// Page 57

// Compound declaration and assignment syntax known as destructuring assignment
// below we are using an array of values 
let [x,y] = [1,2]; // same as let x = 1, y = 2

[x,y] = [x+1, y+ 1]; // same as x = x + 1, y = y + 1

[x,y] = [y,x]; // swap the value of the 2 variables.   

// Converting a pair of array values to fron 2 pair arrays to individual values

let O = {x: 1, y: 2, z: 3};

for([key,value] of Object.entries(O))
{
  console.log(key, value);
}