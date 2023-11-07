
let radio = 10;


function calcularVolumen(radio) {
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    let volumenRedondeado = Math.round(volumen);

    return volumenRedondeado
}

module.exports = calcularVolumen;