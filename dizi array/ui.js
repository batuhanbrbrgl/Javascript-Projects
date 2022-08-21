// let domain = "Batuhan"
// let isActive = false
// let items = [1, 2, 3, 4, 5, isActive, domain]

// console.log(items)


// let emptyArray = [] //Boş List



// console.log(
//     items.length
// )

// // document.querySelector("#info").innerHTML = items.length
// console.log(items[items.length - 1])

// console.log(
//     "ortadaki :",
//     items[Math.floor(items.length / 2)]
// )

// console.log("[]  : ", Array.isArray([]))
// console.log("1  : ", Array.isArray(1))
// console.log("true  : ", Array.isArray(true))

// let items = [10, 20, 30, 40, 50, ]
// console.log("items - ilk hali : ", items)

// //sona öge/eleman ekleme push
// items.push(60)
// console.log("60 :", items)

// //En başa öge egleme push

// items.unshift(5)
// console.log("5 : ", items)
//     //Array:sondaki ögeyi çıkarmak

// let lastitem = items.pop()
// console.log("last item: ", lastitem, "items: ", items)

// //İlk ögeyi çıkarmak

// let firstitem = items.shift()
// console.log("first item: ", firstitem, "items: ", items)

// //ilk ögenin değiştirilmesi

// items[0] = 5;
// console.log(items)
//     //Son ögenin değiştirlmesi
// items[items.length - 1] = 1000;
// console.log(items)

let items = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Kaan", "Mehmet", "Hakan"]


items.unshift(femaleUsers)

items.push(maleUsers)
console.log(items)


console.log(items.length)

console.log(items[0].length)

console.log(items[0][0])

let newItems = items.splice(1, 5)

console.log("newItems:", newItems)
console.log("items", items)


items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

let copyItems = items
console.log(copyItems)
    //son ögeyi çıkart
copyItems.pop()

console.log(copyItems)
console.log(items)

copyItems = items.slice() //Kopyalandıktan sonraki işlem
copyItems.pop()
console.log(copyItems)

let es6Items = [...items] //Es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] //es6 birden fazla array yapısını birleştirme

console.log(allUsers)