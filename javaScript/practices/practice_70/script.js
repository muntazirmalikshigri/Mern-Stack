let ages = [32, 33, 16, 40];

document.write(ages + "<br><br>");

let b = ages.filter(checkAdult);
document.write(b);

function checkAdult(age) {
  return age >= 18;
}

ages.forEach(function(age) {
  document.write("<br>" + age);
});
document.write("<br><br>");

let a = {
    name: "Digital Munna",
    age: 22,
    city: "karachi"
};

document.write(a["city"] + "<br>");
console.log(a);
