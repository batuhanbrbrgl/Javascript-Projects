document.getElementById("change").addEventListener("click", change);



function change() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', "http://api.exchangeratesapi.io/v1/latest?access_key=74306ac19acfff24c0ffef8d1819b99d&format=1")

    xhr.onload = function() {

        if (this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText)
            // console.log(response.rates.TRY);
            const tlgir = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value)
            document.getElementById("tl").value = amount * tlgir


        }
    }
    xhr.send();
}

function notify(type, message) {
    (() => {
        let n = document.createElement("div");
        let id = Math.random().toString(36)
        n.setAttribute("id", id);
        n.classList.add("notification", type);
        n.innerText = message;
        document.getElementById("notification-area").appendChild(n);
        setTimeout(() => {
            var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
            for (let i = 0; i < notifications.length; i++) {
                if (notifications[i].getAttribute("id") == id) {
                    notifications[i].remove();
                    break;
                }
            }
        }, 5000);

    })();
}

function notifySuccess() {
    notify("success", "Başarıyla Çevrilmiştir...");

}