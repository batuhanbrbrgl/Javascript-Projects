let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (message, warning) => `
<div class="alert alert-${warning}" role="alert">
${message}
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "";
        SCORE.value = "";
        alertDOM.innerHTML = alertFunction("Başarıyla Eklendi", "success")

    } else {
        alertDOM.innerHTML = alertFunction("Eksik Bilgi Girildi!!", "danger")
    }

}


let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.appendChild(liDOM)

}