// const merhaba = () => {
// console.log("batuhan");

// }
// merhaba();

// const merhaba = (firstname,secondname) => {
//     console.log("İsmail",firstname,secondname);

// }
// merhaba("Batuhan","BERBEROĞLU");

// const merhaba = (firstname,secondname) => console.log("İsmail",firstname,secondname);
// merhaba("Batuhan","BERBEROĞLU");
// const cube = function (x) {
//     return x*x*x;
// }
// console.log(cube(4));
// const cube = x => x*x*x;

// console.log(cube(6));



//DESTRUCTION


// let number1,number2;
// arr=[100,200,300,400];
// number1=arr[0];
// number2=arr[1];

// const numbers = {
//     a:5,
//     b:7,
//     c:9,
//     d:4,

// };
// const{a:number1,c:number2,d:number3}=numbers;
// console.log(number1,number2,number3);

// const diller = () => ["python","java","javascript"];

// const[dil1,dil2,dil3] =diller();
// console.log(dil1,dil3);



// const person={
//     isim:"batuhan",
//     soyisim:"berberoglu",
//     yaş:22,
//     kilo:85,
// showinfo:()=> console.log("Bilgiler Gösterildi...")
// }
// const {isim:name,soyisim:surname,yaş:age,kilo:weight,showinfo:bilgilergosterildi} =person;
// console.log(name,surname,age);
// bilgilergosterildi();



//SPREAD OPERATOR

// const diller=["python","javascript","java","c++"];
// console.log(...diller);


// const numbers=[0,1,2,3,4,5,6,7];

// const [a,b,...number2]=numbers;
// console.log(a,b,number2);

// const numberss = (a,b,c) => console.log(a+b+c);
// const number=[100,200,300];
// numberss(...number);


//FOR IN FOR OF

// const person={
//     name:"Batuhan",
//     age:23,
//     salary:5000,


// }

// const diller=["python","java","javascript"];

// const isim="batu";
//for in
//for object
// for (let prop in person) {
//     console.log(prop,person[prop]);
// }
//index 
// for (let index in diller) {
//     console.log(index,diller[index]);
// }
// for(let index in isim) {
//     console.log(index,isim[index]);

// }
// for(let value in isim) {
//     console.log(value,isim[value]);
// }
// let mymap=new Map();
// console.log(typeof mymap);

// const key1="batuhan";
// const key2={a:10,b:2};
// const key3=()=>2;

// mymap.set(key1, "String Değer");
// mymap.set(key2, "Obeject Literal Değer");
// mymap.set(key3, "Function Değer");

// console.log(mymap.get(key1));

// const city = new Map();

// city.set("Ankara", 20);
// city.set("Kahramanmaraş", 16);
// city.set("Kayseri", 23);

// city.forEach(function(key,value){
//     console.log(value,key);

// })
// for(let value of city){
//     console.log(value);


// }
// for (let key of city.keys()) {
//     console.log(key);
// }