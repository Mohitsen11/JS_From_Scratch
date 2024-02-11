// Js provided some datatypes to store different kind of data 

// 1. Number like 10, 3.4, 5.324, 1000 etc.
let num1 = 10; 

// 2. String 
// we have three ways to store strings ( we use strings whenever we require to store Text)

// first way to store strings
// use " " ( double quotes)

let greet = "Good morning!";

// second way is ' '( single quotes)

let greet2 = 'Good morning!';

// third way is ` ` ( using backticks)

let greet3 = `Good morning!`;

// 3. Undefined ( something which is not defined yet but will define later)

let tomatoPrice = undefined;

// 4. Null ( it represents empty value)

let blackWater = null;

// 5. Boolean ( true or false)

let bool1 = true;
let bool2 = false;

// 6. Object ( it is a non-primitve datatype ( which depends on other datatypes))

let user = {
    name: "Mohit",
    age: 20,
    address: "Baran",
}

// to know the types of the value there is a typeof operator

console.log(typeof "1");
console.log(typeof 1);
console.log(typeof true);
console.log(typeof null); // it will be object but it should be null ( historical mistake by js developers )
console.log(typeof undefined);
console.log(typeof 4.44);