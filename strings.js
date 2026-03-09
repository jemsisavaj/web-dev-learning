// Topic: JavaScript Strings
// Concepts Covered:
// 1. trim()
// 2. toUpperCase()
// 3. slice()
// 4. prompt input

// string with extra spaces
let msg = "       he llo       ";

// taking input from user
let pass = prompt("set your pass");

// removing extra spaces
let newpass = pass.trim();

console.log(newpass);


// string methods example
let name = "jemsisavaj";

// converting to uppercase and trimming spaces
let newname = name.toUpperCase().trim();

console.log(newname);

// slicing string
name.slice(3);