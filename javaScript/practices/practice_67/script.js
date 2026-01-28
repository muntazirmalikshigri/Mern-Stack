for( let i=10;i>=1;i--){
    for(let j=i;j>=1;j--){
        document.write("* ");
    }
    document.write("<br>");

}

let a =[1,2,3,4,5];
for(let i=0;i<a.length;i++){
    document.write(`<ul><li> ${a[i]} </li></ul>`);
}
document.write("<br>");


// let ary = new Array(4);

// ary[0]="malik";
// ary[1]=22;
// ary[2]=true;
// ary[3]=null;
// document.write(ary[0], " ", ary[1], " ", ary[2], " ", ary[3]);
// document.write("<br>");


let ary = [
    ["muntazir",22,true],
    ['ali',21,true],
    ['ahmadll',19,false]
];
document.write("<table border='1' cellspacing='0' cellpadding='10'>");
for(let i=0;i<ary.length;i++){
    document.write("<tr>");
    for(let j=0;j<ary[i].length;j++){

        document.write(`<td> ${ary[i][j]} </td>`);
    }
    document.write("</tr>");
}
// for(let g=0;g<3;g++){
//     ary[g]=prompt("Enter your value");
//     document.write(ary[g]);
// }

let colors = ["red","green","blue","yellow"];
let b= colors.concat(["malik","muntazir"]);
document.write(b);
let d= colors.join(" , ");
document.write("<br>");
document.write(d);
