let day= +prompt("Enter a number??");
switch(day){
    case 1:
        console.log("MOnday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
}

firstName=prompt("Enter your first name");
lastName=prompt("Enter your last name");
message="welcom "+firstName+" "+lastName+"!"
console.log(message);