//Passing multiple parameter dynamically

function calCartPrice(...num1){           //(...) rest operator used to pass multiple arguments
                                          //we can use this rest operator to pass multiple arguments dynamically
      return num1                                          

}

// console.log(calCartPrice(200,400,712));


const user ={
    username:"Shagun",
    price:199
}

function handle(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
    
}

handle(user)
