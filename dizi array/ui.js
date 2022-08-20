let domain = "Batuhan"
let isActive = false
let items = [1, 2, 3, 4, 5, isActive, domain]

console.log(items)


let emptyArray = [] //Boş List



console.log(
    items.length
)

// document.querySelector("#info").innerHTML = items.length
console.log(items[items.length - 1])

console.log(
    "ortadaki :",
    items[Math.floor(items.length / 2)]
)

console.log("[]  : ", Array.isArray([]))
console.log("1  : ", Array.isArray(1))
console.log("true  : ", Array.isArray(true))