let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio!";
function verificarConsole(){
    console.log("O botão console foi clicado!")
}
function verificarAlert(){
    alert("Eu amo JS!");
}
function verificarPrompt(){
   let cidade = prompt("Digite o nome de uma cidade no Brasil:");
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function verificarSoma(){
   let numeroUm = parseInt(prompt("Digite um número:"));
   let numeroDois = parseInt(prompt("Digite outro número:"));
   let resultado = (numeroUm+numeroDois);
   alert(`A soma deu: ${resultado}`);
}