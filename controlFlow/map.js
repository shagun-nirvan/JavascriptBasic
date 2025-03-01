const map = new Map()       //map is used to return key value pair
 map.set('IN','INDIA')
 map.set('FR','FRANCE')
 map.set('UK', 'UNITED KINGDOM')

//  console.log(map);
 

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}


const myObj ={
    js: 'javascript',
    cpp: 'c++',
    py: 'python'

}

for (const key in myObj) {             //for-in is used to perform iterations in objects
console.log(`${key} is used for ${myObj[key]}`);   //myObj[key] returns the value of that particular key

    }
