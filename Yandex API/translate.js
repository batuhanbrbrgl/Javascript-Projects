function Translate(word, language) {
    this.apikey = "trnsl.1.1.20211124T163027Z.25918483536c7b02.ec55790c434e50e36ed3e73ba422c8d09a6b69ca"
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateword = function(callback) {
    //AJAX işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET", endpoint)


    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            // console.log(JSON.parse(this.xhr.responseText).text[0])
            const json = JSON.parse(this.xhr.responseText)
            const text = json.text[0]

            callback(null, text)
        } else {
            callback("Hata Oluştu", null)
        }
    }

    this.xhr.send();

}
Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord
    this.language = newLanguage

}