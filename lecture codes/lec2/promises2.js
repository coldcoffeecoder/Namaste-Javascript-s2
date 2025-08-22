//fetch() --> it is an api given by browsers to us to make external calls --> now we will use this fetch function to make an api call to gitbub servers and will get a user info with us


const GITHUB_API = "https://api.github.com/users/coldcoffeecoder"

const user = fetch(GITHUB_API); //as soon as this line is executed we will get the promise object inside this user

//there are two things:
//--> the state of promise
//--> result of promise

//result will store whatever data fetch method returns; this will be stored inside promise result

//state of promise tells you in what state that promise is
//-> initially the promise will be in pending state
//-> and once we have got the data back; the promise state changes to fulfill state

console.log(user); //fulfils

// user.then(function (data){
//     console.log(data);
// })


//there can only be three states in the promise
//-> pending
//-> fulfilled
//-> rejected

//promise objects are immutable

 