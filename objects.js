// Topic: JavaScript Objects
// Concepts Covered:
// 1. Object literals
// 2. Object properties
// 3. Nested objects

// object example
const student = {
    name: "janki",
    age: 50,
    marks: 40
};

// example key & value
console.log("Key:", "name");
console.log("Value:", student.name);


// object with array
const item = {
    price: 100.9,
    discount: 50,
    colors: ["red", "pink"]
};

// example key & value
console.log("Key:", "price");
console.log("Value:", item.price);


// nested objects
const classInfo = {
    aman: {
        grade: "A",
        city: "delhi"
    },
    janki: {
        grade: "B",
        city: "surat"
    },
    jemsi: {
        grade: "B",
        city: "surat1"
    }
};

// example key & value
console.log("Key:", "aman");
console.log("Value:", classInfo.aman);