const PRODUCTS = ["laptop", "desktop", "mobile", "tablet", "table", "keyboard"]

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);

console.log(PRODUCTS)