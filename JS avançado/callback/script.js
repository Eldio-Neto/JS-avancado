let usuarios = ["Adriano", "josé", "marcio"];


function inserirusuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome);
        callback()
    }, 1000)

}

function listarUsuarios() {
    console.log(usuarios)
}

listarUsuarios();

inserirusuario("igor", listarUsuarios); // callback é o ato de chamar funções dentro de funções