// odd or even

let number = 4;

if( number % 2 == 0){
    console.log(`${number} is even`);
} else{
    console.log(`${number} is odd`);
}

// min of three

let num1 = 19;
let num2 = 10;
let num3 = 29;
// used nested if else
// if(num1 < num2){
//     if(num1 < num3){
//         console.log(`${num1} is min`);
//     } else{
//         console.log(`${num3} is min`);
//     }
// } else{
//     if(num2 < num3){
//         console.log(`${num2} is min`);
//     } else{
//         console.log(`${num3} is min`);
//     }
// }

// we could do like that also
if(num1 < num2 && num1 < num3){
        console.log(`${num1} is min`);
} else if(num2 < num3 && num2 < num3){
        console.log(`${num2} is min`);
} else{
        console.log(`${num3} is min`);
    }

// valid triangle

let a = 3;
let b = 5;
let c = 2;

if( a+b>=c && b+c>=a && c+a>=b){
    console.log("Valid triangle");
} else{
    console.log("Invalid triangle");
}

// GCD or HCF of two numbers

function gcd(a,b){

    let ans = 1;

    for(let i=2; i<=Math.min(a,b); i++){
        if(a%i == 0 && b%i == 0){
            ans = i;
        }
    }

    return ans;
}

let value1 = 28;
let value2 = 24;

let gdcNumber = gcd(value1,value2);
console.log(gdcNumber);

// Euclid's algo to find GCD ( fastest algo to find gcd)

function gcdEuclid(a,b){

    let minValue = Math.min(a,b);
    let maxValue = Math.max(a,b);

        while(maxValue%minValue != 0){
            let r = maxValue%minValue;
            maxValue=minValue;
            minValue = r;
        }
        if(maxValue%minValue == 0 && minValue != 1){
            return minValue;
        } else {
            return 1;
        }
    
}

let ans = gcdEuclid(7,17);
console.log(ans);

// sum of digits of a number

function  digitSum(n){

    let sum = 0;
    while(n>0){
        let lastDigit = n%10;

        sum += lastDigit;

        n = Math.floor(n/10);
    }

    return sum;
}

let ans1 = digitSum(6571);
console.log(ans1);

// fibonacci series 0,1,1,2,3,5,8,13,21 and so on 
// nth term = (n-1)th term + (n-2)th term

function fib(n){
    let firstDigit = 0;
    let secondDigit = 1;

    let nextDigit = 0;

    if( n == 1){
        console.log(firstDigit);
        return;
    }

    if(n >= 1){
        console.log(firstDigit);
        console.log(secondDigit);
    }

    while(n-2 > 0){
        nextDigit = firstDigit + secondDigit;
        console.log(nextDigit);
        firstDigit = secondDigit;
        secondDigit = nextDigit;
        n--;
    }
}

fib(3);