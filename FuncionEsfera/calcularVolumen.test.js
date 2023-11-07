
const calcularVolumen = require('./calcularVolumen');

test('El volumen de una esfera con 10 cm de Radio es 4188 cm3', () => {
    expect(calcularVolumen(10)).toBe(4189);
});
