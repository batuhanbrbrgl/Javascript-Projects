function UI() {
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.LanguageList = document.getElementById("language");


}
UI.prototype.changeUI = function() {

    this.outputImage.src = `images/${this.LanguageList.value}.png`;
    this.outputLanguage.innerHTML = this.LanguageList.options[this.LanguageList.selectedIndex].textContent


}
UI.prototype.displayTranslate = function(word) {
    this.outputWord.textContent = word;

}