// switch case isa another way to do decision making

let employeeName = "Mohit";

switch(employeeName){ // switch ( value/expression)
    case "Mohit": // case value:  
        console.log("Working at Google");
        break; // when we hit break it exit out from the switch block.
    
    case "Rohit":
        console.log("Working at Apple");
        break;
     
    case "Saurabh":
        console.log("Working at Amazon");
        break;
        
    default:
        console.log("Don't know the company");    
}

