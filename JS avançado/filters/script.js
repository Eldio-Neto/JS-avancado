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



function temMais(aluno){

    return aluno.idade > 30

}

let alunosmenores = alunos.filter( (aluno) => { // podemos usar arrow functions no filter
    return aluno.idade < 30
})

console.log(alunosmenores)

let alunosmaiores = alunos.filter(temMais) // podemos usar funções no filter

console.log(alunosmaiores)