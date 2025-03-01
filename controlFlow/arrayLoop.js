const myCoding = [
    {
        languageName:"javascript",
        fileName:"js"
    },
    {
        languageName:"java",
        fileName:"java"
    },
    {
        languageName:"python",
        fileName:"py"
    }
]

//BASIC FUNCTION FORMAT ------>>   function name() {}
//ARROW FUNCTION  ---------->>  (()=>{}) no need to write function keyword and its name



// myCoding.forEach(item,indexedDB,arr)=>{}      function has access of all parameters of an array



myCoding.forEach( (item) =>{    //forEach is a callback functn
    console.log(item.languageName);
    
})
 



//FILTER METHOD------------------------->>>>>

const language = myCoding.filter((lan)=>lan.languageName ==='java')
console.log(language);



//CHAINING ------------------------->>>>>>>

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNum = nums.map((num)=>num*10)
                    .map((num) => num+1)
                    .filter((num)=> num>40)

console.log(newNum);
                    