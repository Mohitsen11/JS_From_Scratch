let obj = {
    id: 100,
    name: "Dil",
    salary: 20000
}

// Object.keys
const keys = Object.keys(obj);
// return a array of an obj's own keys
console.log(keys); //[ 'id', 'name', 'salary' ]

// Object.values
const values = Object.values(obj);
// return a array of an obj's own values
console.log(values); // [ 100, 'Dil', 20000 ]

// Object.entries
const entries = Object.entries(obj);
// return a array of an obj's key:value pairs
console.log(entries); //[ [ 'id', 100 ], [ 'name', 'Dil' ], [ 'salary', 20000 ] ]

// Object.assign
let newObj = Object.assign({}, obj);
// it assigns the existed object to a new object
console.log(newObj);

// Object.freeze
// by this command you can't update, add and delete the key:values

//Object.seal
// it restricts only update and delete but you can update the key:values 
Object.freeze(obj);

obj.age = 24;
delete obj.id;
console.log(obj); 

