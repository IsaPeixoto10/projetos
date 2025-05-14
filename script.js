function boasVindas() {
    alert('Bem-vindo ao site Saúde Mental em Foco!');
}




function cadastrarUsuario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}`);
}


function agradecerResposta() {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
        alert("Você precisa estar cadastrado para enviar uma resposta.");
        return;
    }

    const resposta = document.getElementById("resposta").value.trim();

    if (!resposta) {
        alert("Por favor, escreva sua resposta antes de enviar.");
        return;
    }

    alert("Resposta enviada com sucesso!");
    document.getElementById("resposta").value = ""; 
}