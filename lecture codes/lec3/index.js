const cart = ["shoes", "pants", "shirt"];

const promise = createOrder(cart); //orderId

promise.then(function () {
    console.log(orderId ); //promise is success
    
    //proceedToPayment(orderId);
})
.catch(function (err) {
    console.log(err.message); 
}); //when the promise is rejected

///producer

function createOrder(cart) { //creating createOrder API
    
    const pr = new Promise(function(resolve, reject) { //resolve and reject are given by js to create promise
        
        //createOrder
        //validateCart
        //orderId

        if(!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "123345";
        if(orderId) {
            resolve(orderId);
        }

    });

    return pr;
}

function validateCart(cart) {
    return true;
}