const batu=document.querySelectorAll(".card-body")[1];
const item=document.querySelectorAll(".list-group-item")[0];
const newadres=document.createElement("h5");
const oldtodo=document.querySelector("#tasks-title");

newadres.textContent ="handrooo";
newadres.className="new"
newadres.id="bu";
batu.replaceChild(newadres,oldtodo);

console.log(oldtodo);
// console.log(newadres);
// console.log(item);

// console.log(batu);