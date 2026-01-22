// const cal={
//     add:function(a,b){
//          return a+b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },
//     sub:function(a,b){
//         return a-b;
//     }
// };
// let a=cal.add(3,4);
// console.log(a);


//       this method


let student={
    name:"malik",
    age:23,
    eng:44,
    math:55,
    pyh:80,
    av:function getAvg(t,d,f){
        let a=(this.eng+this.math+this.phy)/3;
        console.log(a);
    }
};
