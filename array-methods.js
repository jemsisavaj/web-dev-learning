// Topic: Array Methods & ES6 Features
// Concepts Covered:
// 1. forEach
// 2. map
// 3. filter
// 4. every
// 5. some
// 6. reduce
// 7. spread operator
// 8. rest operator
// 9. destructuring


// forEach
let arr =[1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
});


// map
let num = [1,2,3,4];

let square = num.map((el)=>{
    return el * el;
});


// filter
let nums = [2,4,1,5,6,2,7,8,9];

let even = nums.filter((num)=>(num%2==0));


// every
let check = [2,4].every((el)=>(el%2==0));


// some
let some = [1,2,3,4].some((el)=>(el%2==0));


// reduce
let numbers = [1,2,3,4];

let sum = numbers.reduce((res,el)=>(res+el));

console.log(sum);


// find max using reduce
let arr2 = [2,3,4,5,3,4,7,8,1,2];

let max = arr2.reduce((max,el)=>{

    if(el>max){
        return el;
    }

    else{
        return max;
    }

});


// spread
let arrSpread = [1,2,3,4];

let newArr = [...arrSpread];


// rest
function sumRest(...args){

    return args.reduce((add,el)=>add+el);

}


// destructuring array
let names = ["tony", "bruce", "steve", "peter"];

let [winner , runnerup , ...other] = names;

console.log(winner,runnerup);


// destructuring object
const student = {

    name: "jemsi",
    age: 14,
    class: 9,
    subjects: ["hindi","english","math","science"],
    username: "jemsi@123",
    password: "abcd"

};

let {username:user , password:secret , city="mumbai"} = student;