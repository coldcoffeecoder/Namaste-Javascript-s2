//async and await combo is used to handle promises
//use  await in front of the promise that has to be resolved

const p = new Promise((resolve, reject) => {
    resolve("promise resolved value");
});

async function handlePromise() {
    const val = await p;
    console.log(val); //promise resolved value
}
handlePromise();

//await is a keyword that can only be used inside an async function

//await function (){}; //syntax error

