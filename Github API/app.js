const formElementi = document.getElementById("github-form");
const aramaYeri = document.getElementById("githubname");
const temizleButonu = document.getElementById("clear-last-users")
const sonArama = document.getElementById("last-users");

eventListeners();

function eventListeners() {
    formElementi.addEventListener("submit", veriAl)

    temizleButonu.addEventListener("click", hepsiniTemizle)

    document.addEventListener("DOMContentLoaded", tümAramalar)






}

function veriAl(e) {





    e.preventDefault()
}

function hepsiniTemizle() {





}

function tümAramalar() {
    //Arananları Storagedan al ve UI ye yaz







}