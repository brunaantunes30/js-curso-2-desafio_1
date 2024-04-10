let numeroUm = parseInt(prompt("Digite um número:"));
let numeroDois = parseInt(prompt("Digite outro número:"));
let numeroTres = parseInt(prompt("Digite outro número:"));
function verificarNumero() {
    let media = (numeroUm+numeroDois+numeroTres)/3;
    alert(`A média desses números é: ${media}`);
}
verificarNumero(numeroUm);