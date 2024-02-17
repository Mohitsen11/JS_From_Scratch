// Arithmetic operators

let x = 10;
let y = 2;

console.log(x+y); // addition
console.log(x-y); // subtraction
console.log(x*y); // multiplication
console.log(x/y); // division
console.log(x%y); // remainder
console.log(y**2); // exponent

// Assignment operators'

let a = 10;
a+=2;
console.log(a); // it means a = a + 2 
a-=2;
console.log(a); // it means a = a - 2
a*=2;
console.log(a); // it means a = a * 2
a/=2;
console.log(a); // it means a = a / 2
a**=2;
console.log(a); // it means a = a**2

// Relational Operators ( gives boolean as output)
console.log(5>3); // greater than
console.log(5<3); // less than
console.log(5>=3); // greater than equal 
console.log(5<=3); // less than equal

// Logical Operators
console.log(true && false); // logical AND 
console.log(false || true); // Logical OR
console.log(!true); // Logical NOT
console.log((3>4) && (4>6)); 

// Concept of Short circuiting and Coercion ( type inversion in js)

// falsy booleans ( null, undefined, 0, -0, NaN, false)
//truthy booleans ( Objects, non-zero number, non-empty string, true)

console.log(10 && 6); //  Logical And ( when first operand(bool) is false it will return it immediately but if it is true then it will return second operand ( bool))

console.log( 0 && 6) ;

console.log( "" || 10 ) // Logical OR ( Opposite of Logical AND)
console.log( 10 || "");

// NaN ( not a number ( invalid number))
console.log(10 / null); // output = Infinity
console.log(undefined/null); // output = Nan


// Bitwise operators ( performed on binary ( bits ))

// & ( bitwise AND)
console.log(6&9);

// | (bitwise OR)
console.log(4|5);

// ^ ( bitwise XOR)
console.log(2^2);

// ~ ( bitwise NOT)
console.log(~4); // value will be -( x + 1) here x = 4;

// Equality Operators

// "==" Abstract equality operator
// this operator checks the type of the operands 
// if types are same then it calls "===" , if not same then it does coercion(type conversion) and then comparison occurs

console.log( 1 == "1"); // in ecma-international-docs ( string gets converted into number) so the output will be 1 == 1 it refers to === so 1 === 1 yep values are same so it prints " true ";
console.log(1 == "Mohit"); // output = false ( first Mohit gets converted into number but number is not possible so it will converted into NaN and 1 === NaN gets false bcuz they are not equal)

// "===" Strict Equality operator 
// it also checks types 
// if types are diff return false or if it same then comparison occurs
console.log(1 === "1"); // output = false (types are diff) 
console.log("a" === "a");

// Ternary Operators ( (condition)? (exp1) :(exp2))

let m = ((10 >  5) ? (10) : (7)); // output : 10

let b = 10; 
let c = ((false) ? (5) : (++b)); // output : increment the b then assign the value ( 11 );

// unary + operator ( it converts string to a number )
// original operand type doesn't change 
let num1 = "10";
let num2 = +x;
let num3 = -x; // unary - operator ( first convert into number after negate it )
console.log(typeof(num2));
console.log((num3)); // output : -number;