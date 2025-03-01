const arr1 = [1,2,3,4,5,67,8]
const arr2= ["IronMan","SpiderMan","Hulk"]
// console.log(arr1)

// arr1.push(99);
// console.log(arr1);

// arr1.pop()
// console.log(arr1);

// arr1.unshift(91)          //add element at first index
// arr1.shift()   //remove first element from array and return it

const arr3=("A", arr1)
console.log(arr3);
console.log(arr1.slice(0,3));
console.log(arr1.splice(0,3));


const new1 = ['sa','da','sc','dd']
const new2 = ['ss','pp','qq','tt','ll']
// console.log(new1.push(new2));
console.log(new1.concat(new2));
const new3 = [...new1, ...new2]  //best approach 
console.log(new3);


const an_arr = [1,2,3,[4,5,6],7,8,[11,12,[13,14]]]
const ran_arr = an_arr.flat(Infinity)
console.log(ran_arr);



