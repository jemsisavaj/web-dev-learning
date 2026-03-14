/*
This file demonstrates JavaScript DOM Manipulation concepts.

Concepts Covered:
- Selecting elements (by id, class, tag, querySelector)
- Changing image source
- Manipulating text content (innerText, innerHTML)
- Manipulating attributes (getAttribute, setAttribute)
- Manipulating styles
- Using classList
- Creating new elements
- Adding elements to the page
- Removing elements
*/


// Selecting Elements

let mainImg = document.getElementById("mainImg");
console.log(mainImg);

let smallImages = document.getElementsByClassName("oldImg");
console.log(smallImages);

let headings = document.getElementsByTagName("h2");
console.log(headings);

let heading = document.querySelector("h1");
console.log(heading);

let links = document.querySelectorAll(".box a");
console.log(links);


// Changing Image Source

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}


// Manipulating Text Content

console.log(heading.innerText);

heading.innerHTML = "<u>Spider Man</u>";


// Manipulating Attributes

let img = document.querySelector("img");

console.log(img.getAttribute("id"));

img.setAttribute("id", "spiderman");

img.setAttribute("src", "creation_1.png");


// Manipulating Style

heading.style.color = "blue";
heading.style.backgroundColor = "pink";


// Changing Color of Links

for (let link of links) {
    link.style.color = "purple";
}


// Using classList

img.classList.add("newImgClass");
console.log(img.classList);


// Creating Elements

let para1 = document.createElement("p");
para1.innerText = "Hii! I'm red";

document.querySelector("body").append(para1);

para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "I am blue h3!";

document.querySelector("body").append(h3);

h3.classList.add("blue");


// Creating Nested Elements

let div = document.createElement("div");

let h1 = document.createElement("h1");
h1.innerText = "I am in a div";

let para2 = document.createElement("p");
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);

div.classList.add("box");

document.querySelector("body").append(div);


// Removing Elements

para2.remove();