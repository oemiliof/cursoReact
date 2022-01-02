import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas archivo 09-promesas', () => {

    test('Debe retornar un heroe async', () => {

        const id = 1;

        return getHeroeByIdAsync(id)
            .then(data => {
                expect(data).toBe(heroes[0]);
            })
    });

    test('Debe retornar un error si el heroe por id no existe', () => {

        const id = 10;

        return getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
            });

    })


})