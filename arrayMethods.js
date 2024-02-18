// There are many array methods are available to manipulate the arrays element

let studentName = ["Mohit", "Rohit", "Saurabh", "Aryan", "Prashant", "Priya", "Nandu", "Gajendra"];

// we can insert element from the end 
// push

studentName.push("Yash");
studentName.push("Sankalp");

// we can remove element from the end
// pop

studentName.pop();

// we can insert element from the start
// unshift

studentName.unshift("Sana");

// we can remove element from the start
// shift

studentName.shift();

// we can merge two array ( concatenate )
// concat

let a = [1,2,3];
let b = [4,5,6];

let res = a.concat(b);
console.log(res,a,b);

// to find that element is present in the given array 
// indexOf
// if element is present it returns the index value or return -1 if not present

let isPresent = a.indexOf(3);

console.log(isPresent);

// if we want elements from the some specific index to index
// slice

let c = [10,20,30,40,50];

let res1 = c.slice(2,5); // it returns a new array to res1

console.log(res1);

// splice

let removed = c.splice(1, 2, 0, 0);

console.log(removed, c);

// we can club all the array elements in a string

let x = [5,6,7,8, "Mohit"];

const str = x.join(); // default :- separated by comma output :- 5,6,7,8,Mohit ( because parameter is empty)

console.log(str);





