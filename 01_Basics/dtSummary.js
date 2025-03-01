//PRIMITIVE

//7 TYPES : STRING , NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL,BIGINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);



//NON-PRIMITIVE (REFERENCE)
//ARRAY, OBJECTS, FUNCTIONS

const hero = ["shaktiman","iron man","thanos"]

//OBJECTS DECLARATION
let Obj={
    name:"Shagun",
    age:21,
}
console.log(typeof Obj);

//FUNCTIONS
const myFunction = function(){
    console.log("Helu ivirevon");
    
}
console.log(typeof myFunction);

