let usuarios = ["Adriano", "josé", "marcio"];


function inserirusuario(nome) {

    let promise = new Promise(function(resolve, reject) {


        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve()
            } else {
                reject({ msg: "erro de qualquer coisa" })
            }

        }, 1000)

    })

    return promise

}

function listarUsuarios() {
    console.log(usuarios)
}


async function executar() {
    await inserirusuario('igor'); // so mostrará a lista quando o nome for inserido na lista
    listarUsuarios()
}

executar()

// listarUsuarios();
// inserirusuario("igor").then(listarUsuarios);