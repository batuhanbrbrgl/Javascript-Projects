// let laptop1 = {
//     brand: "apple",
//     model: "Macbook Pro",
//     "2kg": 2,
//     modelName: "Macbook Pro"

// }


// console.log(laptop1)


// console.log(laptop1.brand, laptop1["brand"])

// laptop1.brand = "Mac"

// console.log(laptop1)
// laptop1.version = "10.15.7"
// console.log(laptop1)

// keys = Object.keys(laptop1)
// console.log(keys)
// console.log(Object.keys(laptop1))

// keys.forEach(item => {
//     console.log(item)
//     console.log(laptop1[item])
// })

// let user1 = {
//     Name: "Batuhan",
//     lastName: "BERBEROGLU",
//     score: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     isActive: true,
//     shortName: function() {
//         return `${this.Name[0].toUpperCase()}. ${this.lastName}`
//     }
// }
// console.log(user1)

// let settings = {
//     userName: "loremIpsum",
//     password: "BadPassword",
//     isActive: false,
//     ip: "127.0.0.1",
//     serverName: "kodluyoruz.org"
// }

// let { userName: user, password, isActive, ip: serverIP, serverName } = settings

// console.log(settings)
// console.log(user)

// let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings

// console.log(userName2, password2, isActive2, newSettings)

let products;

try {
    products.forEach(item => console.log(item))
} catch (err) {
    console.log("error: ", err)
    products = [0, 1, 2, 3, 4, 5, 6]
    products.forEach(item => console.log(item))
}