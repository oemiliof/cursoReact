import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas del archivo 02-template-string.js', () => {
    test('Funcion getSaludo debe retornar Hola Fernando!', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });

    test('Funcion getSaludo debe retornar Hola Carlos! si no hay argumento en el nombre', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    })


});
