document.getElementById("myName").innerHTML = prompt("Adınızı Giriniz...")


function showTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("myClock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function() { showTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
showTime();