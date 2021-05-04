// console.log("Start Group") // 0.0005

// let data = "content"

// setTimeout(function(){
//     console.log(data) // API 1 second

// }, 1000)

// console.log("End Group") // 0.0005

// CALLBACK FUNCTIONS
// function printGreeting(msg, alertGreeting) {
//     if (msg === "evening") {
//         evening(alertGreeting);
//     } else if (msg === "morning") {
//         morning(alertGreeting);
//     }
//     else {
//         night(alertGreeting);
//     }
// }

// function morning(alertGreeting) {
//     alert("Good Morning");
//     alertGreeting("Hello World");
// }

// function evening(alertGreeting) {
//     alert("Good Evening");
//     alertGreeting("Hello World");
// }

// function night(alertGreeting) {
//     alert("Good Night");
//     alertGreeting("Hello World");
// }

// function alertGreeting(msg) {
//     alert(msg);
// }

// printGreeting('morning', alertGreeting)

// PROMISE FUNCTION
const anyFunction = () => {
    return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
};
function success() { console.log("Success") }
function failure() { console.log("Failure") }

// const chkUserPromise = new Promise(function () {
//     if (success) {
//         resolve();
//     } else {
//         reject();
//     }
// })

// function checkUserPromise(userInput) {
//     new Promise(function(resolve, reject){
//         if (userInput) {
//             resolve();
//         } else {
//             reject();
//         }
//     });
// }

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => (anyFunction() ? resolve() : reject()), 000);
// });

// result.then(function(){
//     console.log(success);
//     return 6;
// })
// .then(function(abc){
//     console.log(abc);
//     return abc + abc;
// })
// .then(function(def){
//     console.log(def);
// })
// .catch(failure);
// console.log("Hello World");


function apiFetch() {
    const chkUserPromise = new Promise(function (resolve, reject) {
        // if (success) {
        //     resolve("Resolving Data");
        // } else {
        //     reject("Rejected Data");
        // }
        // resolve("Resolving Data");
        reject("Rejected Data");
    })
    return chkUserPromise;
}

// Async/Await Function

async function _asyncJS() {
    try {
        let data = await apiFetch()
        console.log(data, "Successful")
    }
    catch(error){
        console.log(error, "error")
    }
}

_asyncJS()