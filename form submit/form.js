let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

}