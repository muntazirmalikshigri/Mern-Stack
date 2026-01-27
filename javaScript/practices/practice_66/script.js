// function myFunction() {
//     document.body.innerHTML +="<h1>malik</h1>";
// };
function mouse(){
    // var i = 9;
    // while(i>=1){
    //     document.body.innerHTML += `<h1>${i} <br></h1>`;
    //     i--;
    // }

    // for loop

    for(let i=1;i<=100;i= i+10){
      
        // if(i%2==0){
        //         document.body.innerHTML +=`<h1>E ${i} <br></h1>`;
        //         continue;
        // }

         for(let j= i;j<i+10;j++){
            document.write(j+" ");
            document.write("&nbsp;&nbsp;");
         }
          document.body.innerHTML +=`<br>`;
    }
    // alert("mouse on paragraph");
}
