// localStorage.setItem("handro", "batu");
// localStorage.setItem("han", 24);
// if(localStorage.getItem("hakan")===null){
//         console.log("sorguladığınız kayıt bulunmuyor");
// }
// else{
//         console.log("kayıt bulunmuştur");
// }

// const value = localStorage.getItem("handro");
// // console.log(value);



const todos=["batu 1","batu 2","batu 3","batu 4","batu 5"];
const value=JSON.parse(localStorage.getItem("todos"));
console.log(value);