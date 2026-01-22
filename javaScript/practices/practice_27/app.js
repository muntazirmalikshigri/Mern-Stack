//for loops in array
// let num=[1,2,3,4,5,6,7,8];
// console.log(num);
// let a=num.reduce((a,b)=>{
//     return a+b;
// });
// console.log(a);
// console.log(num);
// let arr=num.filter((a)=>{
//     return a>5;
// });
// console.log(arr);
// let a=num.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value,index,array;
// });
// console.log(a);
// for(let i=0;i<num.length;i++){
//     console.log(`Element of first ${i} index is =`,num[i]);
// }
// num.forEach((element)=>{
//     console.log(element*element);
// })
// for(let item in num){
//     console.log(item)
// }


// let's start the practice
// let arr=[];
// let a;
// do{
//     a=prompt("Enter a number");
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);
// console.log(arr);

let a=[30,33,90,0,20,44,66,60,75];
let b=a.filter((x)=>{
    return x%10==0;
});
console.log(b);
