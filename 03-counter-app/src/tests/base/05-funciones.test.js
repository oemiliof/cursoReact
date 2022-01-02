import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas archivo 05-funciones-test', () => {

    test('Funcion getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);

    });

    test('funcion getUsuarioActivo debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC567',
            username: 'oscar'
        };

        const nombre = 'oscar';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });

});