var optDurum = false,
    opt = "",
    sonuc = 0;

var btnRakam = document.querySelectorAll(".btnRakam");
var gosterge = document.querySelector("#gosterge")
var btnopt = document.querySelectorAll(".btnopt");
var islem = document.querySelector("#islem")
var btnCE = document.querySelector(".btnCE");
var btnC = document.querySelector(".btnC");
var btnnokta = document.querySelector(".btnnokta");
var btnesit = document.querySelector(".btnESIT")
btnRakam.forEach(function(element) {
    element.onclick = function(e) {

        if (gosterge.textContent == "0" || optDurum)
            gosterge.textContent = ""

        gosterge.textContent += this.textContent
        optDurum = false
    }
})

btnopt.forEach(function(element) {
    element.onclick = function(e) {
        optDurum = true
        var yeniOpt = this.textContent
        islem.textContent = islem.textContent + " " + gosterge.textContent + " " + yeniOpt

        switch (opt) {
            case "+":
                gosterge.textContent = (sonuc + Number(gosterge.textContent));
                break;
            case "-":
                gosterge.textContent = (sonuc - Number(gosterge.textContent));
                break;
            case "*":
                gosterge.textContent = (sonuc * Number(gosterge.textContent));
                break;
            case "/":
                gosterge.textContent = (sonuc / Number(gosterge.textContent));
                break;
            default:
                break;

        }
        sonuc = Number(gosterge.textContent)
        opt = yeniOpt
    }
})

btnC.onclick = function(e) {
    gosterge.textContent = ""
}
btnCE.onclick = function(e) {
    gosterge.textContent = ""
    islem.textContent = ""
    sonuc = 0;
    opt = "";

}

btnnokta.onclick = function(e) {
    gosterge.textContent = Number(gosterge.textContent) + "."

}
btnesit.onclick = function(e) {
    gosterge.textContent = Number(btnRakam.value) + opt + Number(btnRakam.value)
}

btnesit.onclick = function(e) {
    gosterge.textContent = sonuc + Number(gosterge.textContent)
}