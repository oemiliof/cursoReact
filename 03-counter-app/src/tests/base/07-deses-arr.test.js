import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas archivo 07-deses-arr.js', () => {
    test('funcion retornaArreglo retorna string y numero', () => {
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]
        // expect(arr).toEqual(['ABC', 123]);
        // expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    });
});