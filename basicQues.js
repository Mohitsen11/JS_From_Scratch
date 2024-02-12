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