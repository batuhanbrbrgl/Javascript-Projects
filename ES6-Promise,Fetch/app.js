//resolve-response-then
//reject-catch-err


// function getData(data) {
//     return new Promise(function(resolve, reject) {

//         setTimeout(function() {

//             // reject("Olumsuz Sonuç");
//             if (typeof data === "string") {

//                 resolve(data);
//             } else {
//                 reject(new Error("String Değer Giriniz"))
//             }
//         }, 5000)
//     })





// }

// // getData("Merhaba").catch(function(err) {
// //         console.log(err)
// //     })
// // getData("Merhaba").then(function(response) {
// //     console.log(response)
// // })
// getData(123)
//     .then(response => console.log("Gelen Değer: " + response))
//     .catch(err => console.error(err))


function pro2(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function() {

            if (typeof number === "number") {

                resolve(number + 2);
            } else {

                reject(new Error("Lütfen Bir Sayı Giriniz"));

            }



        }, 3000)
    })


}
pro2("merhaba")
    .then(response => {
        console.log(response);
        return response + 2;

    })
    .then(response2 => {
        console.log(response2);
    })
    .catch(err => { console.error(err); })