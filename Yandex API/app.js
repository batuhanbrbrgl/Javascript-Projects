eventListeners()

function eventListeners() {

    document.getElementById("translate-form").addEventListener("submit", translateWord)
    document.getElementById("language").addEventListener("change", translateWord); //change
    document.getElementById("language").onchange = function() {
        //Arayüz işlemleri
        console.log("Event")
        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value)
const ui = new UI();

function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value)

    translate.translateword(function(err, response) {
        if (err) {
            console.error(err)
        } else {
            ui.displayTranslate(response)
        }
    });

    e.preventDefault()
}