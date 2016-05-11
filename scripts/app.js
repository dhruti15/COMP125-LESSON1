// custom javascripts

// self executing anoymus function name(params) {
    //IIFE immediately function expression

(function(){
    console.log("App started...");
    //variable decoration and initialization
    
    var randomnumber =0;
     randomnumber = Math.floor((Math.random() * 10) +1);
    
    console.log(randomnumber);
}());


