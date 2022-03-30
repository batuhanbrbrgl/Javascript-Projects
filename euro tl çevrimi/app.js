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