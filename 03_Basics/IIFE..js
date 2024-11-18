//Immediately Invoked Function Expression(IIFE)
//iife hum global scope ke pollution se bchne k liye use krte hh
//always use semicolon at last
(function name() {
    //named IIFE
    console.log(`DB connected`);

})();

((name) => {
    console.log(`DB connected to ${name}`);//DB connected to Ritik

})("Ritik")