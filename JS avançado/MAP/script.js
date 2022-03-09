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



function nomeIdade(aluno){
    return aluno.nome + ' tem ' + aluno.idade + ' anos'
}

function idadeDaqui5(aluno){
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }

}

console.log(alunos.map(nomeIdade)) // map é uma forma de reorganizar o array sem modificar o original

console.log(alunos.map(idadeDaqui5))