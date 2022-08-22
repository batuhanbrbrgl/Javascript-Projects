// let users = ["Lorem", "Ipsum", "Dolor"]


// const userlistlidom = document.querySelector('#userlistDom')

// for (index = 0; index < users.length; index++) {

//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userlistlidom.appendChild(liDOM)

//     console.log(users[index])



// }


const list = ['lorem', 'ipsum', 'dolor', 'elit', 'adipisicing']

// // for (counter = 0; counter < 10; counter++) {
// //     if (counter === 5) { continue }
// //     console.log(counter)


// // }

const lidom = document.querySelector('#userlistDom')

// // for (index = 0; index < list.length; index++) {
// //     if (list[index] == "dolor") { break }
// //     let DOM = document.createElement('li')
// //     DOM.innerHTML = list[index]
// //     lidom.append(DOM)

// // }

for (index = 0; index < list.length; index++) {
    if (list[index] == "dolor") { continue }
    let DOM = document.createElement('li')
    DOM.innerHTML = list[index]
    lidom.append(DOM)

}
// let username;
// while (!username) {
//     username = prompt("Adınızı Giriniz...")
//     console.log(username)
// }