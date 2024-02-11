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

// falsy booleans ( null, undefined, 0, -0, Nan, false)
//truthy booleans ( Objects, non-zero number, non-empty string, true)

console.log(10 && 6); //  Logical And ( when first operand(bool) is false it will return it immediately but if it is true then it will return second operand ( bool))

console.log( 0 && 6) ;

console.log( "" || 10 ) // Logical OR ( Opposite of Logical AND)
console.log( 10 || "");