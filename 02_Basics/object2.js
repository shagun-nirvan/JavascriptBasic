const regularUser={
    email:"xyz@abc.com",
    fullname:{
        userfullname:{
            firstname:"Shagun",
            lastname:"Nirvan"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const target = {'a':1, 'b':2}
const source = {'c':3, 'd':4}

// const obj = Object.assign({},target,source)  // not widely used
const obj = {...target,...source} //most widely used
console.log(obj);
   