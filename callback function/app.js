// const ders = ["python", "java", "Javascript"];

// ders.forEach(function(dil) {
//     console.log(dil);
// });

// document.getElementById("btn").addEventListener("click", function() {
//     const ders = ["python", "java", "Javascript"];
//     ders.forEach(function(dil) {
//         console.log(dil);
//     })
// })


//ASENKRON İŞLEM
// function process1(callback) {
//     setTimeout(function() {
//         console.log("process1")
//         callback();
//     }, 3000)
// }

// function process2() {
//     setTimeout(function() {
//         console.log("process2")
//     }, 4000)
// }
// process1(process2);

const dersler = ["python", "java", "c++"];

function derseklendi(ders, callback) {
    setTimeout(function() {
        dersler.push(ders)
        console.log("ders Eklendi")
        callback();
    }, 2000)

}

function tümdersler(ders) {
    setTimeout(function() {
        dersler.forEach(function(ders) {
            console.log(ders);

        })

    }, 1000)
}
derseklendi("Javascript", tümdersler);