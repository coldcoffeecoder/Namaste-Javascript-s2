const API_URL = "https://invalidrandom";

async function handlePromise() {
    try{
        const data = await fetch(API_URL); //invalid api
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err){
        console.log(err); //type error: failed to fetch
    }
}
handlePromise();


//traditional way of handling error
//dont use try catch instead 
//we will remove try block but the code inside the try block will remain same
//we will fully remove catch block
//and write this 
handlePromise().catch((err) => console.log(err));
