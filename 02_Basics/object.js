//Object Literals
const mySym = Symbol("key1")
const Jsuser ={
    name: "Shagun Nirvan",
    age:18,
    [mySym]:"MyKey1",       // agar humko symbol ki foam mei use karna hai to humko vo element Square bracket mei likhna hoga
    location:"Shamli",
    email: "nirvanshagun173@gmail.com"
} 
// console.log(Jsuser.name);
// console.log(Jsuser.email);
// console.log(Jsuser[mySym]);

Jsuser.email="shagun.22b1541142@abes.ac.in"
// Object.freeze(Jsuser)  //used to freeze the object no changes will be done on the object after that
Jsuser.email="shagun123@xyz.com"
// console.log(Jsuser);




Jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(Jsuser.greeting());



