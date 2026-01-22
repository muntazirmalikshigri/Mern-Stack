// let str=prompt("Enter your name?");
// let charCheck=str.length;
// for(let i=0;i<charCheck;i++){
//     if(str.slice(i,i+2)==="  "){
//         alert("Double space are not allowed");
//         break;
//     }else{
//         alert("ok");
//         break;
//     }
// }
let text="";
for(i=0;i<text.length;i++){
    if(text.slice(i,i+12)==="Word War II"){
        text=text.slice(0,i)+"the second world war"+text.slice(i,i+12);
    }
}