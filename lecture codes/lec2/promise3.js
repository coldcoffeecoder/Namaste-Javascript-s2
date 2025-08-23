const cart = ["shoes", "pants", "shirt"];

createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});

createOrder(cart) //this is horizontally
.then(function(orderId) {
    return proceedToPayment(orderId); //whenevr there is promise inside a promise chain than you have to return a promise inside a promise chain otherwise we migth loose some data inside the promise chain
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
});
//we can also write it in arrow function also
createOrder(cart) //this is vertically 
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));  