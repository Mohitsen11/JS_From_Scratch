// functions which doesn't have any name or identity 

// we have to assign them to a variable

// function () {
//     console.log("Good morning!");
// } //it cause an error (SyntaxError: Function statements require a function name)

let greet = function (GuestName) {
    console.log("Good Morning,",GuestName);
}

greet("Mohit");

// Self invoking function 

// Functions which we want to execute immediately after the declaration
// wrap the anonymous function inside the () and call it immediately
(function () {
    console.log("Good morning baby");
})();