
const areaTriangulo = require('./areaTriangulo');

test('Base 10 Altura 20 / 2 es 100', () => {
    expect(areaTriangulo(10, 20)).toBe(100);
});
