const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
});

//promises is nothing but, we can assume it to be an empty object
// an empty object with some data value in it


//what are promises?
//--> a promise is an object representing the eventual completion of an asynchronous operation