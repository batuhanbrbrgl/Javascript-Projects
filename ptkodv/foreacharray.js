const USER = ["mic", "laPtop", "desKtop", "mObile", "tablEt", "tabLe", "keyboard"]

// PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);

// console.log(PRODUCTS)

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)

const NEW_USER = USER.map(user => user.toLowerCase())
console.log(NEW_USER)



const USERS_JOB = USER.map(item => ({ username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }))

console.log(USERS_JOB)