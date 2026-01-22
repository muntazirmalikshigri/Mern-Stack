// let arr = [1,2,3,4,5,6];
// // let print = function(el){
// //     console.log(el);
// // };
// // arr.forEach(print);
// arr.forEach((el)=>{
//     console.log(el);
// });

//let arr = [{
//     name:"fakhar",
//     marks:99
// },
// {
// name:"sohail",
// marks:98
// },
// {
// name:"malik",
// marks:88
// }];
// arr.forEach((student)=>{
//     console.log(student.name)
// });

// let num = [1,2,3,4];
// let double = num.map((el)=>{
// return el + el;
// });
// console.log(double);

// let arr = [{
//     name:"fakhar",
//     marks:99
// },{
//     name:"sohail",
//     marks:90
// },{
//     name:"malik",
//     marks:88
// }];
// let gpa = arr.filter((el)=>{
//     return el%2==0;
// });
// console.log(gpa)

let nums = [8,8,90];
// console.log(nums)
// let even = nums.filter((el)=>{
//     return el%2==0;
// });
// console.log(even);
let ans = nums.every((el)=>{
    return el%2==0;
});
console.log(ans);