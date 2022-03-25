// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.showinfos = function() {
//     console.log("İsim:" + this.name + "Yaş:" + 23);

// }
// // const person = new Person("Batuhan", 23);
// // console.log(person);
////////////////////////////////////////////////////////////////
function Person(name, age) {
    this.name = name;
    this.age = age;

}
Person.prototype.showinfos = function() {
        console.log("İsim:" + this.name + "Yaş:" + this.age);
    }
    // const person = new Person("Batuhan", 23);
    // console.log(person);
function Person2(name, age, salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age, salary);
    this.salary = salary;
}
Person2.prototype = Object.create(Person.prototype);
const emp = new Person2("Batuhan", 23, 5000);
console.log(emp);