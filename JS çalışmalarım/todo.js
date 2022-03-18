// // let element;

// // element=document.getElementById("todo-form");


// // console.log(element);
// let value;

// value=document.scripts;
// value=document.scripts.length;

// value=document.links;
// value=document.links[0];
// value=document.links[document.links.length-1].getAttribute("class");
// value=document.links[document.links.length-1].getAttribute("href");
// value=document.links[document.links.length-1].className;


// console.log(value);

// let element;

// element=document.getElementById("todo-form");
// element=document.getElementById("todos-title");

// element=document.getElementsByClassName("list-group-item");
// element=document.getElementsByClassName("card-header");

// element=document.getElementsByTagName("div");
// element=document.getElementsByTagName("li");

// element=document.querySelectorAll(".list-group-item");
// element.forEach(function(el){

//     console.log(el);
// )}



// console.log(element);

// const element = document.querySelector("#clear-todos");

// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.style);
// element.className="btn btn-primary";
// element.style.color = "black";
// element.style.backgroundColor="green";
// element.style.marginLeft = "10px";
// element.href = "http://www.google.com.tr";
// element.target = "_blank";
// element.textContent = "sill";
// element.innerHTML="<span style= 'color:purple'>silll <span>"
// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color = "purple";
//     el.style.backgroundColor="cyan";
// })

// let elements2=document.querySelector("li:last-child");
// console.log(elements2);
// console.log(elements);
// let value;

// const todolist=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const cardrow=document.querySelector(".card.row");
// value=todolist;
// value=todo;
// value=cardrow;

// value=todolist.childNodes;
// value=todolist.children;
// value=cardrow.children[2].children[1].textContent="burası değişti";

// value=todolist;
// value=todolist.firstElementChild;
// value=todolist.children.length;
// value=todolist.lastElementChild.style.fontSize="40px";

// value=cardrow.parentElement;
// value=cardrow.parentElement.parentElement;
// value=todo.previousElementSibling;
// value=todo.nextElementSibling.nextElementSibling;

// console.log(value);

// const newlink=document.createElement("a");
// const cardbody=document.getElementsByClassName("card-body")[1];
// // console.log(cardbody);
// newlink.id="clear-todos";
// newlink.className="btn btn-danger";
// newlink.href="http://www.google.com.tr";
// newlink.target="_blank";
// newlink.appendChild(document.createTextNode("Farklı sayfaya git"));
// cardbody.appendChild(newlink);

// console.log(newlink);

// const todolist=document.querySelector("ul.list-group");
// const todos=document.querySelectorAll("li.list-group-item");

// todos[3].remove();

// todolist.removeChild(todos[2]);

// console.log(todos);
// console.log(todolist);


const todo=document.querySelectorAll(".card-body")[1];
const yenielement=document.createElement("h3");

yenielement.className="yeni döküman";
yenielement.id="new-todo";
yenielement.textContent="Yeni Todo";

const oldtodo=document.querySelector("#tasks-title");
todo.replaceChild(yenielement,oldtodo);
console.log(todo);
console.log(yenielement);