const formElementi = document.getElementById("github-form");
const aramaYeri = document.getElementById("githubname");
const temizleButonu = document.getElementById("clear-last-users")
const sonArama = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    formElementi.addEventListener("submit", veriAl)

    temizleButonu.addEventListener("click", hepsiniTemizle)

    document.addEventListener("DOMContentLoaded", tümAramalar)






}

function veriAl(e) {
    let username = aramaYeri.value.trim();
    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı giriniz.")

    } else {
        github.githubDatagit(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    ui.showError("Kullanıcı Bulunamadı");
                } else {
                    ui.arananKullanıcıyıEkleUI(username)
                    Storage.arananKullanıcıyıekle(username)
                    ui.showUserInfo(response.user)
                    ui.showRepoInfo(response.repo)
                }
            })
            .catch(err => ui.showError(err));


    }
    ui.clearInput();
    e.preventDefault();
}

function hepsiniTemizle() {

    //tüm arananları temizle
    if (confirm("Emin misiniz ?")) {
        Storage.arananKullanıcılarıSil()
        ui.tümarAramalarıTemizleUI();
    }





}

function tümAramalar() {
    let users = Storage.arananlarıDepodanAl();
    let result = "";
    users.forEach(user => {

            result += `<li class="list-group-item">{${user}</li>`
        })
        //Arananları Storagedan al ve UI ye yaz

    sonArama.innerHTML = result
}