function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno('eldio', 24),
    novoAluno('igor', 45),
    novoAluno('leticia', 21),
    novoAluno('luciane', 50),
    novoAluno('Beatriz', 25),
]

console.log(alunos)




//arrays e objetos são referencias por isso, para alteralos sem modificar o original
// temos que criar copias, para copirar um array e objetos podemos usar [...alunoA] ou {...turmaA}

//no caso de arrays podemos usar o slice tbm por exemplo:
// var alunos = ['eldio']
//var alunos2 = alunos.slice()
// alunos2.push ('carlos')

//console.log(alunos) => alunos continua somente com 'eldio'
//console.log(alunos2)=> alunos2 retorna ['eldio', 'carlos']

// no caso de objects podemos:
// var alunos = {nome: 'eldio', idade:'25'}
// var alunos2 = object.assign({}, alunos)
//alunos2.idade = 30

//console.log(alunos) => alunos continua {nome: eldio, idade: 25}
//console.log(alunos2)=> alunos2 retorna {nome: eldio, idade: 30}
