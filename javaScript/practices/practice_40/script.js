// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve("malik");
//     },2000)
// })
// p1
//    .then((value)=>{
//       console.log(value);
//       let p2=new Promise((resolve,reject)=>{
//         resolve("Promise 2");
//       })
//       return p2;
//    })
//    .then(()=>{
//    console.log("We are done");
//    })

// let p1=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     // alert("Hey I am not resolved");
//     // resolve(33);
//     console.log("malik");
//   }, 2000);
// })




// p1.then(()=>{
 
//    return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("congratulations You are resolved");
//     }, 6000)
//    })

//  }).then((value)=>{console.log(value)});




// p1.  
//    then(()=>{
//     alert("Hey malik");
//    })


let p1=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Value 1")
  }, 2000);
})

let p2=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Value 2")
  }, 2000);
})



let p3=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("value 3")
  }, 2000);
})

let promise_all= promise.allSettled([p1, p2, p3])
promise_all.then((value)=>{
  console.log(value);
})

// p1.then((value)=>{console.log(value)});
// p2.then((value)=>{console.log(value)});
// p3.then((value)=>{console.log(value)});