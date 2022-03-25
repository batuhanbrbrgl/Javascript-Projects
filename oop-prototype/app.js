// function calısan(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showinfos = function() {
//         console.log(this.name, this.age, this.salary);
//     }


// }
// const calis1 = new calısan("Batuhan", 22, 5000);
// const calis2 = new calısan("Hakan", 25, 7000);

// calis1.showinfos();
// calis2.showinfos();


////prototype

// function calısma(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showinfos = function() {
//         console.log("bu bir employee obejesidir")
//     }


// }
// const calis1 = new calısma("Batuhan", 22);
// console.log(calis1);
// console.log(calis1.toString());

function calısma(name, age) {
    this.name = name;
    this.age = age;


}
calısma.prototype.showInfos = function() {
    console.log("İsim:" + this.name + "Yaş:" + this.age);
}


const calis1 = new calısma("Batuhan", 22);
calis1.showInfos();