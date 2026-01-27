let number= parseInt(prompt("Enter your marks;"));

switch (true){
    case number<33:
        console.log("fail");
        document.write("<h2>fail</h2>");
        alert("you are fail");
        break;
    case number>33 && number<=50:
            console.log("third class");
            document.write("<h2>third class</h2>");
            break;
    case number>50 && number<=75:
            console.log("second class");
            document.write("<h2>second class</h2>");
            break;
    case number>75 && number<=100:
            console.log("first class");
            document.write("<h2>first class</h2>");
            break;  
    default:
        console.log("invalid input");
        document.write("<h2>invalid input</h2>");
        break;

}

let a = confirm("Do you want to print your marks?");
if(a){
    document.write("<h3>Your marks are: "+number+"</h3>");
} else {
    document.write("<h3>Your marks are hidden</h3>");
}