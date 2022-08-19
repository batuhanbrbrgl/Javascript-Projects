let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault();
    console.log("İslem Gerceklesti")

    let scoreDom = document.querySelector('#score');
    console.log(scoreDom.value);
    localStorage.setItem('score', scoreDom.value);
}