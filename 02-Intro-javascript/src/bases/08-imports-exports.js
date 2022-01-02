// import { heroes } from '../data/heroes';
// import { heroes } from '../data/heroes'

// import heroes, { owners } from "../data/heroes";

import heroes, { owners } from "../data/heroes";

console.log(heroes)

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id)
//             return true;
//         else
//             return false;
//     });
// };

const getHeroesById = (id) => heroes.find(heroe => heroe.id === id);

console.log(getHeroesById(2));


const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner.toLocaleLowerCase() === owner.toLocaleLowerCase());

console.log(getHeroesByOwner('DC'));


console.log(owners)

export {
    getHeroesById,
    getHeroesByOwner
}