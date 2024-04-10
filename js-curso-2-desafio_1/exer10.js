let alturaDaSala = parseFloat(prompt("informe a altura da sala"));
let larguraDaSala = parseFloat(prompt("informe a largura da sala"));
function calculoArea(parAltura, parLargura) {
    return parAltura * parLargura;
}
function calculoPerimetro(parAltura, parLargura) {
    return (parAltura*2)+(parLargura*2);
}
area = calculoArea(alturaDaSala, larguraDaSala);
perimetro = calculoPerimetro(alturaDaSala, larguraDaSala);
alert(`A area calculada ficou ${area.Tofixed(2)} e o perimetro ficou ${perimetro.Tofixed(2)}`);