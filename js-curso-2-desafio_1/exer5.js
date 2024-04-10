let numeroUm = parseInt(prompt("Digite um número:"));
let numeroDois = parseInt(prompt("Digite outro número:"));
function verificarNumero() {
    if(numeroUm > numeroDois){
        alert(`O número maior é: ${numeroUm}`);
    }
    else{
        alert(`O número maior é: ${numeroDois}`);
    }
}
verificarNumero(numeroUm);