// Lecture 6
// Topic: JavaScript Functions
// Concepts Covered:
// 1. Basic functions
// 2. Function arguments
// 3. Returning values
// 4. Scope (global, function, block)
// 5. Higher order functions
// 6. Object methods


// 1. Basic function
function name(){
    console.log("jemsi");
    console.log("janki");
}

name();


// 2. Roll a dice (1 to 6)
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();


// 3. Function with arguments
function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("jemsi",66);


// 4. Table of a number
function table(n){
    for(let i=n ; i<=n*10 ; i+=n){
        console.log(i); 
    }  
}

table(5);


// 5. Concatenate array strings
let str = ["hi","hello","bye","!"];

function concat(str){
    let result = "";
    for(let i=0 ; i<str.length; i++){
        result += str[i];
    }
    return result;
}


// 6. Scope examples
let sum = 32;   // global scope

function calSum(a,b){
    let sum = a+b;   // function scope
    console.log(sum);
}

calSum(1,2);

// {
//     let a=25;  //block scope
// }

// function outerFunc(){
//     let x=5;     //lexical scope
//     let y=6;
//     function innerfunc(){
//            console.log(x);
//     }
//     innerfunc();
// }

// 7. Lexical scope example
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


// 8. Higher order function
function multipleGreet(func , n){
    for(let i = 1;i<=n ; i++){
        func();
    }
}

let greetFunc = function(){
    console.log("hello");
}

multipleGreet(greetFunc,2);


// 9. Function returning another function
function oddEvenTest(request){

    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }

    else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }

    else{
        console.log("wrong request");
    }
}


// 10. Object methods
const calculator = {

    add(a,b){
        return a+b;
    },

    sub(a,b){
        return a-b;
    },

    mul(a,b){
        return a*b;
    }
};
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
    // const square = (n) => n*n;
    
    // console.log(square(4));

//18
//print hello == world - 5 times at intervals of 2 s each
    // let id=setInterval(() => {
    //     console.log("Hello World");
    // },2000);

    // setTimeout(() => {
    //     clearInterval(id);
    // },10000);






//part ---- 8
//1..for each

// let arr =[1,2,3,4,5];
// let print = function (el){
//     console.log(el);

// };
// arr.forEach(print);

//or


// let arr =[1,2,3,4,5];
// arr.forEach ( function(el){
//     console.log(el);
// });


// let arr =[ 
//     {
//     name : "jemsi",
//     marks: 27,
//     } , 
//     {
//     name : "jemsi",
//     marks: 45,
//     }, 
//     {
//     name : "jemsi",
//     marks: 60,
//     }
// ];

// arr.forEach((student) =>{
//     console.log(student.marks);
// });


//2..map
// let num = [ 1,2,3,4];

// let double = num.map((el) =>{
//     return el * el;
// });

// let double2 = num.map((el) =>{});


//3..filter
// let nums = [2,4,1,5,6,2,7,8,9];

// let even = nums.filter( (num) => (num % 2 == 0) );


//4..every    like AND
// let num = [1,2,3,4];
// let every = num.every((el) => (el%2 == 0));
// let every2 = [2,4].every((el) => (el%2 == 0));

//5..some       like OR
// let num = [1,2,3,4];
// let some = num.some((el) => (el%2 == 0));


// 6..reduce
// let num = [1,2,3,4];
// let reduce = num.reduce( (res , el) => (res+el));
// console.log(reduce);

//how its work
// let num1 = [1,2,3,4];
// let reduce1 = num.reduce( (res , el) => {
//     console.log(res);
//     return (res+el);
// });
// console.log(reduce);


//qus.1 ----->  finding maximum in array by reduce 
// let nums = [2,3,4,5,3,4,7,8,1,2]
//let max=0; 
// let result = nums.reduce((max , el) => {
//     if(el > max){
//         return el;
//     }else{
//         return max;
//     }
// });


//qus.2 ----->  check if allc numbers in array are multiply of 10 or not

    let num = [10,20,30,40];
    let every = num.every((el) => (el%10 == 0));

//que.3 ----> finding minimum in array by reduce 
    // let nums = [2,3,4,5,3,4,7,8,1,2]
    // let result = nums.reduce((min , el) => {
    //     if(el < min){
    //         return el;
    //     }else{
    //         return min;
    //     }
    // });

    //     function getMin(nums){
    //         let min = nums.reduce((min , el) => {
    //         if(el < min){
    //             return el;
    //         }else{
    //             return min;
    //         }
    //     });
    //     return min;
    // }
    // let nums = [10,20,30,4];    

//7.spread
    // let arr = [1,2,3,4];
    // let newArr = [...arr];
    // let nums = [...arr,...newArr];
    // console.log(nums);

    // //with object literals
    // let data = {
    //     email : "jemsisavaj08@gmail.com",
    //     password :"ashdh",
    // };
    // let dataCopy = {...data,id:123};
    // console.log(dataCopy);

    // let arr1=[1,2,3,4]; //val
    // let obj1={...arr1}; //obj -> key:val

//8.rest
// function sum (...args){
//     return args.reduce((add , el) => add+el);
// } 

//rest...2
// function sum(...args){
//     return args.reduce((sum, el) => sum+el);
// }

// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min , el) => {
//         if(min > el){
//             return el;
//         }else{
//             return min;
//         }
//         });
// }


//destructuring of array
// let names = ["tony", "bruce", "steve", "peter"];
// let[ winner , runnerup, ...other] = names;
// console.log(winner , runnerup);   ///"tony", "bruce"

//destructuring of object
const student = {
    name: "jemsi",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "jemsi@123",
    password: "abcd",
};
let {username:user , password: secret, city ="mumbai"} = student;