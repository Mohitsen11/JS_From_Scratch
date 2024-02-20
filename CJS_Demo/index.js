// const { linearSearch: ls }= require('./searching'); // destructure the data and alias it with ls

const ls = require("./linearSearch"); // linearSearch will be an object inside the exported functions or logic will be there

const bs = require("./binarySearch"); // direct function is imported

console.log(ls);
console.log(bs);

let index = ls.linearSearch([5,3,2,7,4], 5);
let index1 = bs([1,2,3,4], 3);

console.log(index);
console.log(index1);