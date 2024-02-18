// Creation of the array
// arrays are linear data structure used to store large amount of data 
// it can stores multiple types of data
// element access is very easy in arrays

let arr = [1,2,3,4,5]; 

console.log(arr); // output :- [1,2,3,4,5];

let colors = new Array(10);

console.log(colors); //[ <10 empty items> ]

let fruits = Array("Mango", "Apple", "Grapes");

console.log(fruits); //[ 'Mango', 'Apple', 'Grapes' ]

// we can store heterogenous values in arrays

let data = [1, "Mohit", 3.44, true, {key: 1, pass: "123@gmail"}, ["SDE1", "Web dev"]];

console.log(data);


// Arrays are mutable ( means we can update the elements of the arrays)

// elements --> [1,2,3,4,5];
// index/pos-->  0,1,2,3,4

// Accessing the elements using indexes

console.log(arr[2]); // output :- 3

// Update the element

arr[2] = 100;

console.log(arr);