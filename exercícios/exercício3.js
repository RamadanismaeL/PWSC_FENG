function enviar() {
    const txtNome = document.getElementById("txtNome").value;
    const txtApelido = document.getElementById("txtApelido").value;
    const txtSexo = document.getElementById("txtSexo").value;
    const txtIdade = document.getElementById("txtIdade").value;
    const txtEndereco = document.getElementById("txtEndereco").value;
    const txtContacto = document.getElementById("txtContacto").value;

    document.getElementById("resultado").innerHTML = "<h1> Informações Recebidas </h1>" + 
    "<br><p><strong>Nome:</strong> " + txtNome + "</p" +
    "<br><p><strong>Apelido:</strong> " + txtApelido + "</p" +
    "<br><p><strong>Sexo:</strong> " + txtSexo + "</p>" +
    "<p><strong>Idade:</strong> " + txtIdade + "</p>" +
    "<p><strong>Endereço:<strong> " + txtEndereco + "</p>" +
    "<p><strong>Contacto:<strong> " + txtContacto + "</p";
}

function limpar() {
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerHTML = "";
}