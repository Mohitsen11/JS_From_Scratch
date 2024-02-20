// these are global things which nodejs runtime env provides js to enhance the capabilities of js

console.log(__dirname); // it doesn't work in es6 
console.log(typeof(__dirname)); // string

console.log(require);
console.log(typeof(require)); // function

console.log(module);
console.log(typeof(module)); // object

console.log(global);
console.log(typeof(global)); // object

console.log(process);
console.log(typeof(process)); // object