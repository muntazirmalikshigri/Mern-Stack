// let promise=new promise(function(resolve,reject){
//     alert("Hello")
//     resolve(56)
// })

// console.log("Hello world");
//  setTimeout( function() {
//     console.log("Malik")
// }, 3000);
// console.log("han jee");
// let y="5"+5;
// console.log(typeof y);
// let x=2;
// let y=5;
// let z=Math.pow(y,3);
// console.log(z);
// console.log(100+50*3);


let p=new Promise((resolve,reject)=>{
    console.log("Promise is at pending?");
    setTimeout(()=>{
        alert("Hi I am promise and I am fulfilled");
        // resolve(true);
        reject(new Error("I am an error"))
    },4000)
})
console.log(p);

