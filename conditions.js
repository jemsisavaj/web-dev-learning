// Topic: Conditional Statements
// Concepts Covered:
// 1. if statement
// 2. else if statement
// 3. Logical operators
// 4. Simple practice problems

let age = 5;

if (age >= 18) {
    console.log("you can vote");
}

if (age < 25) {
    console.log("you can't vote");
}


// Traffic light example
let color = "yellow";

if (color == "red") {
    console.log("stop!");
}

if (color == "yellow") {
    console.log("wait!");
}

if (color == "green") {
    console.log("go!");
}


// else-if
let age1 = 19;

if (age1 == 18) {
    console.log("you can vote");
}
else if (age1 >= 18) {
    console.log("you cannot vote");
}