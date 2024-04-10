let altura = parseFloat(prompt("Digite sua altura:"));
let peso = parseFloat(prompt("Digite seu peso:"));
let imc;
function calculoIMC(parPeso, parAltura){
    return parPeso/(parAltura*parAltura);
}
imc = calculoIMC(peso, altura);
alert(`Seu IMC ficou ${imc.toFixed(2)}`);