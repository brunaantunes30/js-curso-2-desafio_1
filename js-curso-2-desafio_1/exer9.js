let valor = parseFloat(prompt("Digite o valor em dólar:"));
let resultado;
function calculoDolar(valor) {
    return (valor*4.80);
}
resultado = calculoDolar(valor, resultado);
alert(`O valor em dólar ficou ${resultado.toFixed(2)}`);