// const obj = {
//     test1: function() {
//         console.log(test1);
//     },
//     test2: function() {
//         console.log(test2);
//     }

// }

// const test1 = Object.create(obj);
// test1.name = "batuhan";
// test1.age = 23;
// console.log(test1);


///////////////////////////////////////////////////////

// function Person() {

// }
// Person.prototype.test1 = function() {
//     console.log("test1");
// }
// Person.prototype.test2 = function() {
//     console.log("test2");
// }

// function calısma(name, age) {
//     this.name = name;
//     this.age = age;
// }
// calısma.prototype = Object.create(Person.prototype);
// const calıs = new calısma("Batuhan", 23);
// console.log(calıs);