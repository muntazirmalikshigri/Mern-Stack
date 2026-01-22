// let num=Math.random();
// num=num*10;
// // console.log(num);
// num=Math.floor(num);
// console.log(num);
// num=num+1;
// console.log(num);
// let rondom=Math.floor(Math.random()*10)+1;
// console.log(rondom);
// let num=Math.floor(Math.random()*100);
// console.log(num);
// let num=Math.random();
// console.log(num);
// num=(num*10)+1;
// num=Math.floor(num);
// console.log(num);
// let num=Math.floor(Math.random()*6)+20;
// console.log(num);

// let's try to guessing game
const max=+prompt("Enter a max number?");
const random=Math.floor(Math.random()*max)+1;
let guess=+prompt("Guess the number?");
while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats!!");
        break;
    }
    else if(guess<random){
        guess=prompt("Your number is small . please try again?");
    }else if(guess>random){
        guess=prompt("Your number is high . please try again");
    }
//     else{
//         prompt("Your numbe was wrong.Please try again");
//     }
 }