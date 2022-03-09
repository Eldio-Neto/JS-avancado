

let dobro = function(){
    return 2 * this.x
}

let numero = {
    x: 8,
    d: dobro
}

console.log(numero.d())

//-----------------------------------------

var dobro1 = x => 2 * this.x // na arrow function não é possivel utilizar o this

let numero1 = {
    x: 8,
    d: dobro1
    
}

console.log(numero1.d())


