
function add(number1, number2) {
    return number1 + number2
}

function substract(number1, number2) {
    return number1 - number2
}


const calculadoraObj = {};
calculadoraObj.add = add;
calculadoraObj.substract = substract;


module.exports = calculadoraObj;


