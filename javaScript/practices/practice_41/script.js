

async function malik(){ 
let karachiWeather=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("27 degree");
        // console.log("malik")
    }, );
})
let lahoreWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("44 degree")
    },4000)
})
// karachiWeather.then(alert)
// lahoreWeather.then(alert)
console.log("fetching the karachi weather please wait...");
let karaWeather= await karachiWeather
console.log("fetched the karachi weather is: "+karaWeather);
console.log("fetching the lahore weather please wait...");
let lahoWeather= await lahoreWeather
console.log("fetched the lahore weather is: "+lahoWeather);
return [karaWeather,lahoWeather]
}
let a=malik();
// console.log("Welcome to control room");
// console.log(a)
a.then((value)=>{
    console.log(value);
})








// async function malik(){
//     console.log("malik")
//     // return 5;
// }
// malik().then(()=>{
//     console.log("Musa")
//     alert(5);
// });