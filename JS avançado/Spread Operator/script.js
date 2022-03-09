var pessoa = {
    nome: 'igor',
    idade: 32
}

var contato = {
    telefone: 123456789,
    email: 'lalalal@gmail.com'
}


var copia = {...pessoa, ...contato} // com spread operator conseguimos juntar 2 arrays ou objetos em 1 só 

console.log(copia)


