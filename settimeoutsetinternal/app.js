// setTimeout(function() {
//     console.log("Batuhan")
// }, 3000);


let i = 0;
let value = setInterval(() => {
    i++;
    console.log("Sayı", i);

}, 1000);


document.getElementById("btn").addEventListener("click", function() {
    clearInterval(value);

});




// document.getElementById("devam").addEventListener("click", function() {
//     setInterval(value);
// });