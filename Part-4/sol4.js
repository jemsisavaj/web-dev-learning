//1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//2
// let number = 287152;
// let count = 0;
// while(number>0){
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log(count);

//3
// let num = 287152;
// let sum = 0;
// while(num>0){
//     let lastdigit = num % 10;
//     sum = sum+lastdigit;
//     num = Math.floor(num/10);
// }
// console.log(sum);

//4
// let n=5;
// factorial = 1;
// if(n==0){
//     factorial*=1;;
// }
// else{
//     for(let i=1 ; i<=n ; i++){
//         factorial*=i;
//     }
// }
// console.log(`factorial of ${n} is $(factorial)`);

//5
let arr = [1,20,3,40,5];
let largestNum = 0;
for(let i=0;i<arr.length ; i++){
    if(arr[i] > largestNum){
        largestNum = arr[i];
    }
}
console.log(largestNum);
