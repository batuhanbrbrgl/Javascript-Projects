const obj1 = {
    number1: 100,
    number2: 200,
};
const obj2 = {
    number1: 300,
    number2: 400,
};

function addNumbers(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4);

}
addNumbers.call(obj1, 100, 200);
addNumbers.call(obj2, 100, 200);