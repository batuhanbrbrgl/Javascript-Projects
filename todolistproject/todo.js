const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //Tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    filter.addEventListener("keyup",filterTodos);
    secondCardbody.addEventListener("click", deleteTodo);
    clearButton.addEventListener("click", clearAllTodos);

}


function clearAllTodos(e) {

    if(confirm("Tümünü silmek İstiyor musunuz ?")){

        // todoList.innerHTML=""; //YAVAŞ
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
            localStorage.removeItem=("todos");
        }
    }



}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1){
            // Bulamadı
            
            listItem.setAttribute("style","display : none !important");
        }
        else {
            listItem.setAttribute("style","display : block");
        }

        

    });

}
function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("danger", "Başarı ile Silindi");
    }


}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();
    todos.forEach(function (todo,index) {
        if (todo === deletetodo) {
            todos.splice(index,1);//arrayden değeri silme
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "lütfen bir todo girin!..");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarı ile eklendi...")
    }


    e.preventDefault();
}
function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;


}
function addTodoToStorage(newTodo) {

    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    //settimeout
    setTimeout(function () {
        alert.remove();

    }, 4000);

}
function addTodoToUI(newTodo) {
    //string değerini list item olarak UI ye ekleyecek.

    console.log(newTodo);

    //List item oluşturma                  
    const listItem = document.createElement("li");

    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";

    //Text node eklement

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";



}