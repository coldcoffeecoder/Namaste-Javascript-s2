
const API_URL = "https://api.github.com/users/coldcoffeecoder";

async function handlePromise() {
    

    const data = await fetch(API_URL);//when u call this fetch it gives you a promise

    //fetch() => response.json => result
    const jsonValue = await data.json();
    console.log(jsonValue);
    
}
handlePromise(); //handle promsie function execution will suspend at await line itself and the function execution will resume after this fetch call has been successfully fulfilled

//FETCH
//-->is basically a promsie
//-->when the promise is resolved it gives you a response object
//-->and this response object has a body whcih is a readable stream(response body is  a readable stream)
//--> and suppose you have to convert this response readable stream to json you have to do --> response.json
//--> and this response.json is again a promsie
//--> and when this promise is resolved it gives you the result or the value

//normally we write fetch function like this
fetch().then(res => res.json()).then(res => console.log())