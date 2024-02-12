// we will use functions in this tutorial 
// DRY concept follows :- Don't repeat yourself

function isEvenOrOdd(num){ // here num is parameter ( something which is defined and processed)
    if(num % 2 == 0){
        return "Even";
    } else{
        return  "Odd";
    }
}

let num1 = 2;
let num2 = 45;
let num3 = 56;

console.log(`Num1 is : ${isEvenOrOdd(num1)}`); // here num1 is argument( something which actually is passed)
console.log(`Num2 is : ${isEvenOrOdd(num2)}`);
console.log(`Num3 is : ${isEvenOrOdd(num3)}`);

// now find even or odd in range 1 to 50

for(let i=1; i<=50; i++){
    console.log(`${i} is ${isEvenOrOdd(i)}`);
}

// Note:- Js functions always returns a value 
// if you have not returned any value then js automatically returns "undefined"

function welcome(name){
    console.log(`Hello, Mr. ${name}`);
}

function greet(name){
    console.log(`Good Morning!, Mr. ${name}`);
    return "Good day";
}

let result = welcome("Mohit");

console.log(result); // will print undefined 

let result2 = greet("Rohit");
console.log(result2); // will print Good day 

// important :- console.log() returns undefined

let p = console.log("Mohit");
console.log(p); // output :- undefined