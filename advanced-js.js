// Topic: Advanced JavaScript
// Concepts Covered:
// 1. this keyword
// 2. try & catch
// 3. arrow functions
// 4. setTimeout
// 5. setInterval


// this keyword example
const student = {

    name: "kavy",
    age: 78,
    eng: 2,
    maths: 1,
    phy: 2,

    getAvg(){

        console.log(this);

        let avg = (this.eng + this.maths + this.phy) / 3;

        console.log(avg);

    }

};


// try catch example
console.log("hello1");

try{
    console.log(a);
}
catch(err){

    console.log("variable a doesn't exist");
    console.log(err);

}


// Arrow function
const square = (n) => n*n;

console.log(square(4));


// setTimeout example
console.log("hi there!");

setTimeout(()=>{

    console.log("apna college");

},4000);


// setInterval example
let id = setInterval(()=>{

    console.log("Hello World");

},2000);


// stop interval after 10 seconds
setTimeout(()=>{

    clearInterval(id);

},10000);