

function greet(){
    document.body.innerHTML+="<h1>Hello, welcome to the JavaScript practice!</h1>";
}
greet();

function sum(a,b){
    sum = a+b;
    document.body.innerHTML+=`<h1>The sum of ${a} and ${b} is ${sum}.</h1>`;
}
sum(5,10);

function name(fnmae , lname){
    // document.write(`<h1>your name is ${fnmae} ${lname}.`)
    return a= fnmae + lname;
};
name("Muntazir", "Malik");
document.write(`<h1>Your name is ${a}.</h1>`);