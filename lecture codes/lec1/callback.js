console.log("hello");

setTimeout(function(){
    console.log("you");
    
}, 5000);

console.log("how are");

//js is a sync single threaded lang
//it can just do one thing at a time
//it has just one call stack and it can execute one thing at a time
//and whatever code you give it to js..will be quickly executed by the js engine..it does not wait for anything

//using callback is a powerful way to do async thing in js
//we can take a piece of code inside a function and pass it as a callback which can be executed later point of time and our job is done.

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function() {

    api.proceedToPayment(function() {
        
        api.showOrderSummary( function (){
            
            api.updateWallet()

        })
    })
}) //callback hell

//one callback function inside another callback inside another API or some if statements or random things happening makes it a callback hell

//Inversion of control
//is like that you loose the control of your code when we are using callbacks