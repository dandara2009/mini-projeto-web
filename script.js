function gerarSaudacao() {
    let nome = document.getElementById("nome").value;
    let resultado = document.getElementById("resultado");

    if (nome.trim() === "") {
        resultado.innerText = "⚠️ Digite seu nome!";
        resultado.style.color = "red";
        return;
    }

    let hora = new Date().getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia ☀️";
    } else if (hora < 18) {
        saudacao = "Boa tarde 🌤️";
    } else {
        saudacao = "Boa noite 🌙";
    }

    resultado.style.color = "black";
    resultado.innerText = `${saudacao}, ${nome}!`;

}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("frase").innerText = "";
}