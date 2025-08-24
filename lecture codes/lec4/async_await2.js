const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved value");
    }, 5000);
});

const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved value");
    }, 10000);
});

//async can only be used inside an async function
async function handlePromise() {
    console.log("hello world");
    //js engine was waiting for promise to resolved
    const val = await p1;
    console.log("hiii");
    console.log(val);
    
    const val2 = await p2;
    console.log("Namaste");
    console.log(val2);
    
}
handlePromise();

// function getData(){
//     //js engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));

//     console.log("namaste");  
// }

// getData();


//console
//handlePromise() //after 5 sec handlepromise function will again comeback
//callstack
//async- p1, p2