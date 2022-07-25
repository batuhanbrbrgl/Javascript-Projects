// let isim = "Batuhan"
// let soyisim = "BERBEROĞLU"
// let yıl = "1999"
// let email = "hanbatu1684@gmail.com"


// console.log(isim.toUpperCase())
// console.log(soyisim.toLowerCase())
// console.log(soyisim)



// let DOMAIN = email.slice(email.search("@") + 1)
// console.log(DOMAIN)
// const handro = DOMAIN.slice(0, DOMAIN.indexOf('.'))

// function btt() {
//     if (DOMAIN.slice(0, DOMAIN.indexOf('.')) === "gmail") {
//         console.log("Mail girildi")
//     } else {
//         console.log("Mail Yanlış Girildi")
//     }

// }
// btt();

// email = email.replace('gmail.com', 'outlook.com')
// console.log(email)
// console.log(email.includes('@'))
// console.log(
//     email.endsWith('outlook.com'))
// let fullname = prompt("Adınızı Giriniz...")
// let btt = document.querySelector("#batu")

// btt.innerHTML = `${btt.innerHTML} <small style=color:green>${fullname}</small>`



// let firstchild = document.querySelector("ul#list>li:first-child").innerHTML = "DSADASDi"

// let lastchild = document.querySelector("ul#list>li:last-child")

// let uldom = document.querySelector("ul#list")
// let lidom = document.createElement('li')

// lidom.innerHTML = "Oluşturulan li"

// // uldom.append(lidom)


// uldom.prepend(lidom)

// let batu = document.querySelector("#btt")

// batu.classList.add("list")


// let batu = "100"


// console.log(batu === "100")
// console.log(!!2)
// let userName = prompt("Kullanıcı adınızı giriniz")
// let info = document.querySelector("#info")


// info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı bilgisi bulunamadı"}`


// function btt(firstname, lastname) {
//     let info = `Merhaba ${firstname} ${lastname}`
//     return info
// }
// let info = btt("batu", "brbrgl")
// console.log(info)



// function ekranayazi(id, info) {
//     let object = document.getElementById(id)
//     object.innerHTML = info


// }

// ekranayazi('btt', "batuhandro")
// ekranayazi('batu', "Buraya Yazıldı")

// let yazi = document.getElementById("btt")

// yazi.innerHTML = "Batuhan"
// yazi.className = "hann"
// let firstname = "Lorem"

// function greetings(firstname = "") {
//     console.log(`Merhaba ${firstname}`)
// }
// greetings("Apple")    
// function greetings2(firstname, lastname) {
//     let info = `Merhaba ${firstname} ${lastname}`
//     return info
// }
// let greetingsInfo = greetings2("Ad", "Soyad")
// console.log(greetingsInfo)

// function domIdWriteInfo(id, info) {
//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }
// domIdWriteInfo('greeting', greetings2("lorem", "ipsum"))


// function hello(firstName) {
//     console.log(`Merhaba ${firstName}`)
// }
// hello("Javascript")

// const hellofunc = (firstName) => { console.log(`Merhaba ${firstName}`) }
// hellofunc("hellofnc")

// const hellofunc2 = firstName => console.log(`Merhaba ${firstName}`)
// hellofunc2("hellofunc2")

// const hellofunc3 = (firstName, lastName) =>
//     console.log(`Merhaba ${firstName} ${lastName}`)
// hellofunc3("Batuhan", "Berberoğlu")

// const hellofunc4 = (firstName, lastName) => {
//     let info = `Merhaba ${firstName} ${lastName}`
//     console.log(info)
//     return info
// }


// let greet = document.querySelector("#greeting")
// greet.addEventListener("click", domClick)

// function domClick() {
//     console.log("tıklandi")
//     this.style.color == "red" ? this.style.color = "green" : this.style.color = "red"
// }
let counter = 0
let arttir = document.querySelector("#increase")
let azalt = document.querySelector("#decrease")
let sayi = document.querySelector("#counter")

sayi.innerHTML = counter
arttir.addEventListener("click", clickEvent)
azalt.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    if (this.id == "increase") {
        sayi.innerHTML = counter += 1


    } else {
        sayi.innerHTML = counter -= 1
    }
}