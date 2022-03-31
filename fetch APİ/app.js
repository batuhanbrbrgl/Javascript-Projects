function dosyayagit() { //TEXT DOSYASI

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));



}

function jsondosya() { //Local bir JSON dosyasından veri alma

    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))






}

function apialma() {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=74306ac19acfff24c0ffef8d1819b99d&format=1")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY);
        })
        .catch(err => console.log(err))



}

apialma();



// jsondosya();

// dosyayagit();