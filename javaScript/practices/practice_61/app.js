// let idName=document.getElementById('malik');
// // // console.log(idName);
// // // document.getElementsByClassName("bg-black").style.color="red"
// idName.innerHTML="malik";
// let bgcolor=document.querySelector(".bgcolor");
// bgcolor.style.color="green";
// let ul=document.querySelector("ul");
// console.log(ul);

let liElement = document.querySelectorAll("li");
liElement.forEach(function(l){
    l.style.backgroundColor="red";
    l.style.color="white";
})
// console.log(liElement);