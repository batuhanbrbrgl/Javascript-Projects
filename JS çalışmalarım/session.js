const add=document.querySelector("#add");
const del=document.querySelector("#delete");
const clear=document.querySelector("#clear");



const key=document.querySelector("#addkey");
const value=document.querySelector("#addvalue");
const dkey=document.querySelector("#deletekey");

add.addEventListener("click", ekle);
del.addEventListener("click", sil);
clear.addEventListener("click",temizle);

function ekle(e) {
    sessionStorage.setItem(key.value, value.value);
}

function sil(e) {
    sessionStorage.removeItem(dkey.value);
}

function temizle(e) {
    sessionStorage.clear();
    
}