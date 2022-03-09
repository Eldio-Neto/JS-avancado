function novoAluno(nome, idade, sexo) {
    return {
        nome,
        idade, 
        sexo
    }
}

let alunos = [
    novoAluno('eldio', 24, 'masc'),
    novoAluno('igor', 45,'masc'),
    novoAluno('leticia', 21,'fem'),
    novoAluno('luciane', 50,'fem'),
    novoAluno('Beatriz', 25, 'fem'),
]
console.log(alunos)

let alunoscopias = []

// Desafio MAP

function DesafioMap(alunos){

    if(alunos.sexo == 'masc'){
        alunoscopias.push('O aluno ' + alunos.nome + ' tem ' + alunos.idade + ' anos ')
    }
    else{
        alunoscopias.push('A aluna ' + alunos.nome + ' tem ' + alunos.idade + ' anos ')
    }

}

alunos.forEach(DesafioMap)
console.log(alunoscopias)

// -------------------------------

// Desafio Reduce

let idades = []

function somaTotal(alunos){

    idades.push(alunos.idade)
    
}

function somaIdade(){

    let idadetotal= 0;

    for(let i of idades){
        idadetotal += i;
    }
    return idadetotal
}



alunos.forEach(somaTotal)
console.log("a soma das idades desta turma é igual a " + somaIdade())
