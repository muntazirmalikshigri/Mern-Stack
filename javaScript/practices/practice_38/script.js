// Function to update the clock
// function updateClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
    
//     const timeString = `${hours}:${minutes}:${seconds}`;
    
//     document.getElementById('clock').textContent = timeString;
// }

// // Initial call to display the clock immediately
// updateClock();

// // Update the clock every second
// // setInterval(updateClock, 1000);

// let a=prompt("What is your name?");
// let b=prompt("What is your age?");
// let c=prompt("What is your favorite color?");
// console.log(a+" age is "+b+" and his favorite color is "+c);
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey I am good");
// },3000)
// console.log("End");
setTimeout(function(){
    console.log("Muntazir Munna Malik");
    document.body.getElementsByClassName("demo").innerHTML="Muntazir Munna Malik";
},3000)