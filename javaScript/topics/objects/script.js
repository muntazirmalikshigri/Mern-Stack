let person ={
    name : "Munna",
    age : 22,
    city : "karachi",

}

console.log(person.name);
console.log(person["karachi"]);

let a = {
    name : "Munna",
    age : 22,
    city : "karachi",
    hobbies : ["cricket", "football", "coding"],
    isStudent : true,
}

for(let key in a){
    console.log(key , a[key]);
}

let b = [10, 20, 30, 40, 50];

let c = b.map(function(value){
    return value * 2;
})
console.log(b);
console.log(c);