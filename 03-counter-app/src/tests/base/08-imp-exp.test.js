import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de mostrar un heroe por id', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(c => c.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar un undefined si Heroe no existe', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(c => c.id === id);

        expect(heroe).toBe(undefined);
    });

    test('Dbe retornar un arreglo con los heroes de DC', () => {

        const owner = "DC";

        const heroesDC = getHeroesByOwner(owner);

        const heroesData = heroes.filter(c => c.owner == owner)

        expect(heroesDC).toEqual(heroesData);
    });


    test('Dbe retornar un arreglo con los heroes de DC', () => {

        const owner = "Marvel";

        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    });



})
