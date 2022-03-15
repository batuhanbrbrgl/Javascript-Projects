// let i=0;
// while(i<10){
//     console.log(i);
//     i=i+1;
// }
// for(let i=0; i<10; i++){
//     console.log(i);
// }
// let i=0;
// while(i<10){
//     if(i==3 || i==5){
//         i++;
//         break;
//     }
//     console.log(i);
//     i++;
// }
// let i=0;
// while(i<10){
//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
const diller=["python", "java", "Javascript"];
// // let index=0;
// // while(index< diller.length){
// //     console.log(diller[index]);
// //     index++;
// // }
// for(let index=0; index<diller.length; index++){
//     console.log(diller[index]);
// }
// diller.forEach(function(diller,index){
//     console.log(diller,index);
// });
// const users=[
//     {name:"Batuhan", age:23},
//     {name:"Kaan", age:27},
//     {name:"Ahmet", age:22}
// ];
// const names= users.map(function(user){
//     return user.name;
// });
// const ages= users.map(function(user){
//     return user.age;
// })
// console.log(names);
// console.log(ages);
const user={
    name:"Batuhan",
    age:23
};
for(let key in user){
    console.log(key,user[key]);
}