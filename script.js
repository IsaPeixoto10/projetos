function boasVindas() {
    alert('Bem-vindo ao site Saúde Mental em Foco!');
}

function cadastrarUsuario() {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();

      if (!nome || !email || !senha) {
        alert("Preencha todos os campos.");
        return;
      }

      const usuario = { nome, email, senha };
      localStorage.setItem("usuario", JSON.stringify(usuario));

      alert(`Cadastro realizado com sucesso!\nBem-vindo(a), ${nome}`);

      // Redireciona para a página inicial
      window.location.href = "inicio.html";
    }

function enviarResposta() {
    const resposta = document.getElementById("resposta").value.trim();
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
      document.getElementById("mensagem").textContent = "Você precisa estar cadastrado para enviar respostas.";
      return;
    }

    if (resposta === "") {
      document.getElementById("mensagem").textContent = "Digite algo antes de enviar.";
      return;
    }

    // Aqui você pode salvar ou mostrar a resposta, como desejar
    alert(`Resposta enviada com sucesso!\nObrigado, ${usuario.nome}`);
    document.getElementById("mensagem").textContent = "";
    document.getElementById("resposta").value = ""; // limpa o campo
  }
  
function fazerLogin() {
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();

      const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

      if (!usuarioSalvo) {
        document.getElementById("mensagem").textContent = "Nenhum usuário cadastrado.";
        return;
      }

      if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        alert("Login realizado com sucesso!");
        window.location.href = "inicio.html"; // ou sua página inicial
      } else {
        document.getElementById("mensagem").textContent = "E-mail ou senha incorretos.";
      }
    }