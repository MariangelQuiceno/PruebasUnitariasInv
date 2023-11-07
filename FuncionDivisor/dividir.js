

let divisor = 2;
let dividendo = 10;

function dividirNumeros(dividendo, divisor) {
    if (divisor !== 0) {
    return dividendo / divisor;
    } else {
    return "No se puede dividir por cero";
    }
}

module.exports = dividirNumeros;