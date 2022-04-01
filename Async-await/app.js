// async function test(data) {


//     let promise = new Promise((resolve, reject) => {

//         setTimeout(function() {
//             resolve("5 saniye bekleyen değer");


//         }, 3000)
//     })
//     let response = await promise;
//     return response;
// }

// test("merhaba")
//     .then(response => console.log(response))

// async function test(data) {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 resolve(data);
//             } else {
//                 reject(new Error("Lütfen String bir değer Giriniz..."))
//             }
//         }, 3000)
//     })
//     const response = await promise;
//     return response;
// }
// test("batu").then(data => console.log(data));

// async function batu(url) {
//     const response = await fetch(url);


//     const data = await response.json();
//     return data;





// }
// batu("http://api.exchangeratesapi.io/v1/latest?access_key=74306ac19acfff24c0ffef8d1819b99d")
//     .then(data => console.log(data))