const cal = require('./calculadora.js')
const fileSys = require('fs');



console.log(cal.add(2,3))
console.log(cal.substract(10,5));


let filepath = './myNewTextFile.txt';

let data = 'Estamos en clase de Desarrollo Web';

fileSys.writeFile ( filepath, data, function (error) {
    if (error) {
        console.log("Error", error)
    }
    console.log("Archivo creado")
});


