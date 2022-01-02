// test('Debe de ser true', () => {
//     const isActive = true;

//     if (isActive) {
//         throw new Error('No esta activo');
//     }
// });


describe('Pruebas del archivo demo.test.js', () => {
    test('Deben ser iguales los strings', () => {

        // 1. Inicializacion
        const mensaje1 = 'Hola mundo';

        // 2. estimulo
        const mensaje2 = `Hola mundo`;

        // 3. Observar
        expect(mensaje1).toBe(mensaje2);

    });

});

