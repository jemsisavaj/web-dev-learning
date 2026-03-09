// Topic: JavaScript Arrays
// Concepts Covered:
// 1. Array creation
// 2. push()
// 3. for loop with arrays
// 4. Nested arrays

// creating array
let fruits = ["mango", "banana", "apple"];

// adding element
fruits.push("pineapple");

// loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}


// nested arrays example
let heroes = [
    ["ironman", "spiderman"],
    ["superman", "flash"]
];

// nested loop
for (let i = 0; i < heroes.length; i++) {

    console.log(`List #${i}`);

    for (let j = 0; j < heroes[i].length; j++) {

        console.log(heroes[i][j]);

    }
}