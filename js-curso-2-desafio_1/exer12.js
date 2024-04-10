let raio = parseFloat(prompt("Digite o raio da circuferencia:"));
let pi = 3.14;
function calculoArea(parRaio) {
    return pi*(raio**2);
}
function calculoPerimetro(parRaio) {
    return(2*pi)*parRaio;
}
resultadoArea = calculoArea(raio);
resultadoPerimetro = calculoPerimetro(raio);
alert(`A area ficou ${resultadoArea.toFixed(2)} o perimetro ficou ${resultadoPerimetro.toFixed(2)}!`);
