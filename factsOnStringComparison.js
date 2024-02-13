// we will compare strings and check whether they are equal or not 

let str1 = "abc";
let str2 = String("abc");
let str3 = new String("abc");

// now compare the strings with each-other
// we used abstract equality operator 
console.log(str1 == str2);
console.log(str2 == str3);
console.log(str1 == str3);

// it returns true are comparison why ?? 
/* because when the types are not equal it converts the type it does coercion */

// now try strict equality operator
/* when types are different it immediately returns false */

console.log(typeof(str1)); //output : string
console.log(typeof(str2)); // output : string
console.log(typeof(str3)); // output : Object

console.log(str1 === str2); //output : true 
console.log(str2 === str3); //output : faLse
console.log(str1 === str3); //output : false



