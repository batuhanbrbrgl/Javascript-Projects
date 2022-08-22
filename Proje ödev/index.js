let task = document.querySelector('#task');
let button = document.getElementsByClassName("button");
let list = document.querySelector("ul");

let notesArray = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

if (notesArray && !localStorage.getItem("notes")) {
    for (let i = 0; i < list.children.length; i++) {
        notesArray[i] = [list.children[i].innerHTML];
    }
    localStorageUpdater();
}

listUpdater();

// Create a "close" button and append it to each list item
for (let i = 0; i < list.children.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list.children[i].appendChild(span);
}

// Click on a close button to hide the current list item. adding 'removed' className into li (ev is span)
list.addEventListener("click", function(ev) {
    if (ev.target.className === 'close') {
        ev.path[1].classList.add('removed');
        notesArray.forEach(a => a.indexOf(ev.path[1].childNodes[0].textContent) != -1 ? a.push("removed") : a);
    }
    localStorageUpdater();
}, false);

// Click on li to toggle 'checked' className which then in css we modify text decoration
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        myEv = ev;
        notesArray.forEach(a => a.indexOf(ev.target.childNodes[0].textContent) !== -1 ? (a.indexOf("checked") === -1 ? a.push("checked") : a.splice(a.indexOf("checked"), 1)) : a);
    }
    localStorageUpdater();
}, false);

function localStorageUpdater() {
    localStorage.setItem("notes", JSON.stringify(notesArray));
}

function listUpdater() {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    notesArray.forEach(item => liMaker(item));
}

function newLiMaker(item) {
    let newList = document.createElement("li");
    newList.textContent = item;

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newList.appendChild(span);

    list.appendChild(newList);
}

function liMaker(item) {
    let newList = document.createElement("li");
    newList.textContent = item[0];
    item.forEach(a => a.includes("checked") ? newList.classList.add("checked") : a);
    item.forEach(a => a.includes("removed") ? newList.classList.add("removed") : a);
    list.appendChild(newList);
}

function newElement() {
    if (task.value.split("").filter(a => a !== " ").join()) {
        newLiMaker(task.value);
        notesArray.push([list.children[list.children.length - 1].childNodes.item(0).nodeValue]);
        localStorageUpdater();
        $(".success").toast("show");
    } else {
        $(".error").toast("show");
    }
    task.value = "";
}