function hesapla() {

    let isim = document.getElementById("isim").value
    let vize = parseInt(document.getElementById("vize").value)
    let final = parseInt(document.getElementById("final").value)
    let ortalama = (vize * 0.4) + (final * 0.6)



    document.getElementById("tablo_isim").textContent = isim
    document.getElementById("tablo_vize").textContent = vize
    document.getElementById("tablo_final").textContent = final
    document.getElementById("tablo_ortalama").textContent = ortalama

}


function temizle() {
    document.getElementById("isim").value = ""
    document.getElementById("vize").value = ""
    document.getElementById("final").value = ""
}