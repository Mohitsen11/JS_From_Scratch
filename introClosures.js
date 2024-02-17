// closures :- it give you access to outer function's scope from an inner function 

// we do nesting of functions 

function fun1(){
    let fruitName = "Mango";

    function fun2(){
        console.log(fruitName);
    }
    fun2();
}

fun1();

// ----------------------------------
function makeSum(x){
    return function addTwo(y){
        console.log(x+y);
    }
}

let sum1 = makeSum(5);
sum1(5);

//---------------------------------------
function sum2(x){
    return function sum3(y){
        return function sum4(z){
            return x+y+z;
        }
    }
}

let ans1 = sum2(5);
let ans2 = ans1(5);
let ans3 = ans2(5);

console.log(ans3);
