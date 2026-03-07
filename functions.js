//part ---- 6
//1
    // function name(){
    //     console.log("jemsi");
    //      console.log("janki");
    // }
    // name(); //function calling



//2.create function to roll a dice & disply the value of the dice(1 t0 6)
    // function rollDice(){
    //     let rand = Math.floor(Math.random() * 6 ) + 1;
    //     console.log(rand);
    // }

    // rollDice();




//3.funtion with argument
    // function printInfo(name, age){
    //     console.log(` ${name}'s age is ${age}`);
    
    // } 
    // printInfo("jemsi",66);   
    // printInfo("jemsi");   
    //  printInfo(66);   



//4.table
//     function table(n){
//         for(let i=n ; i<=n*10 ; i+=n){
//             console.log(i); 
//         }  
//     }    

// table(23);

//5-create a fun that returns the concatention of all strings in an array
    // let str = ["hi","hello","bye","!"];

    // function concat(str){
    //     let result = " ";
    //     for(let i=0 ; i<str.length; i++){
    //         result += str[i];
    //     }
    //     return result;
    // }

//6 scope
    // let sum = 32;   //global scope
    // function calSum(a,b){
    //     let sum = a+b;   //function scope
    //     console.log(sum);
    // }
    // calSum(1,2);

    // {
    //     let a=25;  //block scope
    // }

    // function outerFunc(){
    //     let x=5;     //lexical scope
    //     let y=6;
    //     function innerfunc(){
            
    //         console.log(x);
    //     }
    //     innerfunc();
       
    // }

//7 -que
    // let greet = "hello";  //global
    // function changeGreet(){
    //     let greet = "namaste"; //function
    //     console.log(greet);

    //     function innerGreet(){
    //     console.log(greet);   //lexical
    //     }
    //     innerGreet();
    // }
    // console.log(greet);
    // changeGreet();
        
//higher order func
//8
    // function multipleGreet(func , n){  //higher order
    //     for(let i = 1;i<=n ; i++){
    //         func();
    //     }
    // }
    // let greet=function(){
    //     console.log("hello");
    // }
    // multipleGreet(greet,2);

//9
    // function oddEvenTest(request){
    //     if(request == "odd"){
    //         let odd= function(n){
    //             console.log(!(n%2==0));
    //         }
    //         return odd;
    //     }
    //     else if(request == "even"){
    //         let even= function(n){
    //             console.log(n%2==0);
    //         }
    //         return even;
    //     }
    //     else{
    //         console.log("wrong request");
    //     }
    // }


//10.method -- 1
    // const calculator = {
    //     add: function(a, b){
    //         return a + b;
    //     },
    //     sub: function(a, b){
    //         return a - b;
    //     },
    //     mul: function(a, b){
    //         return a * b;
    //     }
    // };
    
//method -- 2   
    // const calculator = {
    //     add(a,b){
    //         return a+b;
    //     },
    //     sub(a,b){
    //         return a-b;
    //     },
    //     mul(a,b){
    //         return a*b;
    //     }
    // };







//part ---- 7
//11. this keyword
// const student = {
//     name: "kavy",
//     age: 78,
//     eng: 2,
//     maths: 1,
//     phy: 2,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.maths + this.phy) / 3
//         console.log(avg);
//     }
// }    
// function getAvg(){
//         console.log(this);
        
//     }    


//12.try and catch
    // console.log("hello1");
    // console.log("hello2");
    // // let a= 5;

    // try{
    //     console.log(a);
    // }catch(err) {
    //     console.log("variable a dosen't");
    //     console.log(err);
    // }
    
    // console.log("hello3");
    // console.log("hello4");


//miscellaneous topic
//13.arrow function
    // const sum=(a,b) => {
    //     // console.log(a+b);  //or
    //     (a + b)      // replace {this} with (this)
    // };

    // const cube = n => { return n*n*n;    };  // only single argument have () vgar 


//14. set timeout
    // console.log("hi there!");

    // setTimeout( ()=>{
    //     console.log("apna college");
    // }, 4000);

    // console.log("welcome to ");
    // console.log("welcome to ");
    // console.log("welcome to ");
    

//15. set interval     (multiple time output)
    // let id = setInterval( () => {
    //     console.log("apna college");
    // }, 2000);
    // console.log(id);
    
    // let id2 = setInterval( () => {
    //     console.log("iitram college");
    // }, 3000);
    // console.log(id2);
    

//16.this with arrow function
    // const student = {
    //     marks:89,
    //     name: "jemsi",
        
    //     prop: this, //globle scope
    //     getName : function(){
    //         console.log(this);
    //         return this.name;
    //     },

    //     getMarks : () =>{
    //         console.log(this);  //parent's scope -> window
    //         return this.marks;
    //     },

    //     getInfo1:function(){
    //         setTimeout(() => {
    //             console.log(this); //student
    //         },2000);
    //     },

    //     getInfo1:function(){
    //         setTimeout(function() {
    //             console.log(this); //window
    //         },2000);
    //     },


    // };   

//17
//write an arrow func that returns the sqaure of a num n
    const square = (n) => n*n;
    
    console.log(square(4));

//18
//print hellow world - 5 times at intervals of 2 s each
let id=setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id);
},10000);



