let numero = parseInt(prompt("informe um numero"));
let resultado = 1;
function calcularFatorial(fatNumero) {
    if (fatNumero == 0) {
        return 1;
    }
    while(fatNumero != 0){
        resultado *= fatNumero;
        fatNumero -= 1;
    }
    return resultado;
}
calcularFatorial(numero);
alert(`O fatorial de ${numero} é ${resultado}`);