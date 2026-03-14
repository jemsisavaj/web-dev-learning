// Topic: DOM Events
// Concepts Covered:
// 1. Selecting Element
// 2. onclick Event
// 3. Multiple Buttons using querySelectorAll
// 4. Mouse Events
// 5. Event Listener
// 6. Event Listeners for Elements
// 7. "this" in Event Listeners
// 8. Keyboard Events
// 9. Form Events
// 10. Change and Input Events
// Practice Questions



// 1. Selecting Element
/*
let btn1 = document.querySelector("button");
console.dir(btn1);
*/



// 2. onclick Event
/*
let btn2 = document.querySelector("button");

function sayHello1() {
    alert("Hello!");
}

btn2.onclick = sayHello1;
*/



// 3. Multiple Buttons using querySelectorAll
/*
let buttons = document.querySelectorAll("button");

function sayHello2() {
    alert("Hello!");
}

for (let btn of buttons) {
    btn.onclick = sayHello2;
}
*/



// 4. Mouse Enter Event
/*
let btnsMouse = document.querySelectorAll("button");

for (let btn of btnsMouse) {
    btn.onmouseenter = function () {
        console.log("You entered a button");
    };
}
*/



// 5. Event Listener
/*
let btnsEvent = document.querySelectorAll("button");

function sayHello3() {
    alert("Hello!");
}

function sayName3() {
    alert("Apna College");
}

for (let btn of btnsEvent) {

    // btn.addEventListener("click", sayHello3);
    // btn.addEventListener("click", sayName3);

    btn.addEventListener("dblclick", function () {
        console.log("You double clicked me");
    });

}
*/



// Practice Question: Random Color Generator
/*
let btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated");

});

function getRandomColor() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}
*/



// 6. Event Listeners for Elements
/*
let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("Paragraph was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
    console.log("Mouse inside div");
});
*/



// 7. "this" in Event Listeners
/*
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
*/



// 8. Keyboard Events
/*
let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {

    console.log("Code =", event.code);

    if (event.code == "ArrowUp") {
        console.log("Character moves forward");
    }
    else if (event.code == "ArrowDown") {
        console.log("Character moves backward");
    }
    else if (event.code == "ArrowLeft") {
        console.log("Character moves left");
    }
    else if (event.code == "ArrowRight") {
        console.log("Character moves right");
    }
});
*/



// 9. Form Events
/*
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
*/



// 10. Change and Input Events
/*
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("Change event");
    console.log("Final value =", this.value);
});

user.addEventListener("input", function () {
    console.log("Input event");
    console.log("Final value =", this.value);
});
*/



// Practice Question: Live Text Preview
/*
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = inp.value;
});
*/