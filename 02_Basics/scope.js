let a=10
const b=20
var c=30


function one(){
    const username="shagun"
    function two(){
        const web ="youtube"
        console.log(username);
        
    }
    // two()
}
// one()

//*************************INTERESTING************************** */


function addone(num){
    return num+1
}

addone(5) 
const addtwo = function(num){
    return num+2
}


// ()=>{} if scope({}) is open in function then we have to use return keyword to return the Value
// otherwise we do not have to return the Value in case of ()=>

    // forex ======>>>
const addnum = (num)=> 5+4
console.log(addnum);

const addnum2 = (nums) => {
    return 6+4+3
}