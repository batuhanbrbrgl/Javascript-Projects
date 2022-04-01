eventListeners()

function eventListeners() {

    document.getElementById("translate-form").addEventListener("submit", translateWord) //change
    document.getElementById("language").onchange = function() {
        //Arayüz işlemleri

    }
}
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)

function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value)

    translate.translateword(function(err, response) {
        if (err) {
            console.error(err)
        } else {
            console.log(response)
        }
    });

    e.preventDefault()
}