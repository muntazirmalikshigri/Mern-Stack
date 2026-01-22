// for(let i=1;i<=15;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }
// for(let i=1;i<=15;i=i+5){
//     console.log(i)
// }
// console.log("Backwards")
// for(i=15;i>=1;i=i-5){
//     console.log(i)
// }
// for(i=2;i<=10;i=i+2){
//     console.log(i);
// }
//Table of 5
// let num=5;
// let i;
// for(i=1;i<=10;i++){
//     console.log(num, "X" ,i, "=" ,num*i);
// }
// let n=+prompt("what is your number??")
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }
for(i=1;i<=3;i++){
  console.log(`outer loop i ${i}`);
    for(j=1;j<=5;j++){
        console.log(`inner loop j ${j}`);
    }
}