//wht is async
//--> async is a keyword that is used before any function to create an async function

//async function always returns a promise
//either you return a promise from this function than its fine
//or if you return a value from this function....then this function will automatically wrap this value inside a promise than will return a promise

async function getData() {
    return "hello";
}

//const data = getData();

//console.log(data);
//output will return a promise
//that is fullfilled
//result is hello

const dataPromise = getData();

dataPromise.then((res) => console.log(res)); //hello

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!!");
});

async function getData() {
    return p;
} //op-> Promise resolved value!!