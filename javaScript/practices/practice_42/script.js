// function outerFunction(){
//     let x=4;
//     let y=5;
//     function innerFunction(){
//         console.log(x+y)
//     }
//     innerFunction();
// }

// let greet="Hello";
// function changeGreet(){
//     let greet="salam";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet)
//     }
//     innerGreet();
// }
// changeGreet();


// console.log(greet);



// function multipleGreet(func,count){
//     for(let i=1; i<=count;i++){
//         func();
//     }

// }
// let greet=function(){
//     // console.log("hello");
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// multipleGreet(greet,5);


function oddEvenTest(request){
    if(request=="odd"){
        let odd= function(n) {
    console.log(!(n%2==0))
    }
    return odd;
}    
else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("Wrong request")
    }
}
oddEvenTest(20);