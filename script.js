// LOCAL STORAGE PART
var nome;
var email;
var endereco;
var senha;

//essa declaração é uma tentativa de reutilizar as variaveis
//pergunte sobre o não reconhecimento da variavel depois da função salvar

function salvar(){
  nome = document.getElementById("nome").value
  email = document.getElementById("email").value
  endereco = document.getElementById("endereco").value
  senha = document.getElementById("senhaV").value
  
  localStorage.setItem("user", nome)
  localStorage.setItem("email", email)
  localStorage.setItem("address", endereco)
  localStorage.setItem("password", senha)

  alert("Sua conta foi registrada com sucesso")
}

// LOGIN CHECK


//INACABADO!
function check (){
  if("user" in localStorage && "password" in localStorage){
    
    nome = localStorage.getItem("user")

    nomeLog = document.getElementById("nomeLog").value

    senha = localStorage.getItem("password")

    senhaLog = document.getElementById("senhaLog").value

    if(senha == senhaLog && nome == nomeLog){
    window.location.href="home.html";
  }
  else{
    alert("Senha ou login errado")
  }
  }

  else{
    alert("Sua conta não existe")
  }

  
  
}




