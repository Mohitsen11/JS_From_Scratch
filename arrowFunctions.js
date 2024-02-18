// if there is only one return statement then it doesn't require {} and return keyword
// for single parameter we don't require ()
let fun = (x) => x*x;

let ans = fun(5);
console.log(ans);

let fun1 = (x,y) => x+y;

let ans1 = fun1(2,3);
console.log(ans1);

// for multiple statements inside arrow functions we have to use {}

let fun3 = (x,y) => {
    console.log("Kese ho ap?");
    return x+y;
}

let ans3 = fun3(5,5);
console.log(ans3);

// we can declare the arrow function like that but for calling this we require to give it a name or assign it to a variable 
() => {
    console.log("Hi");
}


