const cart = ["shoes", "pants", "shirt"];

createOrder(Cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    proceedToPyament(orderId);
})
.then(function (paymentInfo) {
    console.log(paymentInfo);
})
.catch(function (err) {
    console.log(err.message);
}); //after .catch no matter what happend if then is there  it will be called

//producer

function proceedToPyament(orderId){
    //
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return true ;
}