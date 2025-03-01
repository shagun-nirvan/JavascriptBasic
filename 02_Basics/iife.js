// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)

(function shagun(){
    console.log(`DB CONNECTED`);        //NAMED IIFE
    
})();       //two iife ko ; se separate karr sakte hai

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);        //UNNAMED IIFE
    
})('nirvan')