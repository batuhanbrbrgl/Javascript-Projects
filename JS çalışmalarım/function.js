// function merhaba(name="bilgi yok",age="bilgi yok"){
//     console.log(`isim: ${name} yaş: ${age}`);
// }
// merhaba("batuhan",22);
// merhaba("hakan",26);
// merhaba();
// function kare(x) {
//     return x*x;  
// }
// function küp(x){
//     return x*x*x;

// }
// let a=küp(kare(8));

// console.log(a);
const database={
    host:"localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("elde edildi");

    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);

    },
    delete:function(id){
        console.log(`Id: ${id} silindi`);

    }
}
console.log(database.host);
database.add();
database.delete(10);
