// while loop

let i = 1; // first initialize a variable to use while loop

while( i <= 5 ){ // condition is checked again and again until it becomes false
    console.log(i);
    i++;
}

console.log("End of the program");

// sum of natural num from 1 to 10

let count = 1;
let sum = 0;

while( count <= 10 ){
    sum += count;
    count++;
}

console.log(`Sum of numbers from 1 to 10 is : ${sum}`);

// reverse printing of numbers from 5 to 1

let num = 5;

while( num >= 1){
    console.log(num);
    num--;
}

// for loops 

for(let x = 1; x<=5; x++){
    console.log(x);
}

// print sum

let ans = 0;

for(let x = 1; x<=5; x++){
    ans = ans + x;
}

console.log(ans);

// do-while loop

let y = 10;

do{
    y++;
} while( y < 5 ); // this loops executes at least once whether the condition is false . And if condition is true then it works as simple loop.

console.log(y); // output = 11

// for of loop

let array1 = [1,2,3,4,5,10,20];

for(let num of array1){
    console.log(num);
}

let obj2 = {
    name: "Mohit",
    age: 23,
    company: "Google"
}

for(let item of Object.keys(obj2)){
    console.log(item);
}
