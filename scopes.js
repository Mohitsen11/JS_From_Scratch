// Types of scopes in js 
/* We have three types but according to mdn docs we have 4

1. Global scope 
2. Function scope
3. Block scope
4. Module scope

"var" is a function scope or global scope when it is initialize, it doesn't work on block scope.

let and const both are block scope ( block means {} ). */

// console.log(a); // it will cause error
let a = 4; // here it is global ( we can access let based variable after its initialization )

function fun(){
    let a = 5; // here it is local to function ( block scoped ).
    console.log(a);
    console.log(b); // it will not cause error because var b is a functional scoped and it can be accessed anywhere in the function, before its initialization also ( value will be undefined in this case).
    var b = 10;
}
fun();
console.log(a);


{
    let x = 7; // not accessible outside of this block scope
    const p = 90;  // not accessible outside of this block scope
    var y = 12;  // accessible outside of this block scope
}

// console.log(x,p); it will cause error because their scope is local to the block itself we can't use ( access ) outside of {}.
console.log(y);

// Note :- Js is neither pure interpreted nor compiled programming language. 
// It is somewhere in the between of these two.

// It runs js code in two phases 
// 1. Parsing  (scope resolution for formal declared functions or variables)
// 2. Execution ( at the time of execution corresponding variables assigned by the values in their corresponding scope)


var teacher = "Mohit"; // assigned with global scope

function fun1(){ // assigned with global scope
    let teacher = "Rohit"; // assigned with fun1 function scope
    friend = "Nandu";
    friend1:  // if you log this outside and after the execution of fun1 it will cause error because we didn't assign any value to it.
    console.log(teacher);
}

function fun2(){ // assigned with global scope
    let student = "Saurabh"; // assigned with fun2 function scope
    console.log(student);
}

// console.log(friend);  it will be executed before the fun1 where it is declared so it will cause error because it is not a global variable.
fun1();
fun2();
console.log(teacher);
console.log(friend); // it will not cause any error because at the time of execution js will make this variable global.