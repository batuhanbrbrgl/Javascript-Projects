// 1 sunucu bağlantısı kuruldu//server connection establishied

// 2 istek alındı//request received

// 3 işleme isteği//processing request

// 4 istek tamamlandı ve yanıt hazır//request finished and respone is ready


// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

document.getElementById("btn").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //     // console.log(this.readyState)
    //     // console.log(this.status);
    //     if (this.status == 200 && this.readyState == 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onload = function() {

        if (this.status === 200) {
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    xhr.open("GET", "example.txt", true);
    xhr.send()
});