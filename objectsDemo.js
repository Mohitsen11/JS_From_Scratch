// Objects are entity which can have multiple key:value pairs 
// it represents a real world entity with some properties and behavior
let obj = {
    id : 101,
    name: "Mohit",
    salary: "10000k"
}

console.log(obj); //{ id: 101, name: 'Mohit', salary: '10000k' }

// another way to initialize the obj

let obj1 = new Object(); // it returns empty object
console.log(obj1);

// but you can add key:value pairs

obj1.id = 100;
obj1.name = "Sham";
obj1.salary = 10000;
obj1['age'] = 24;

console.log(obj1);
console.log(obj1.id);
console.log(obj1['id']);

// we can create object using functions

function Emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

let emp1 = new Emp(200, "Sam", 20000);
console.log(emp1);

console.log(typeof(emp1)); // object
