import { getHeroesById } from "./bases/08-imports-exports";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log("2 segundos despues")
//         const heroe = getHeroesById(2);

//         // console.log(heroe);

//         resolve(heroe);

//         // reject('No se pudo encontrar el heroe');

//     }, 2000);
// });

// console.log("antes de promesa")
// console.log(promesa)
// console.log("despues de promesa")

// promesa
//     .then((result) => {
//         console.log("heroe", result);
//     })
//     .catch((error) => {
//         console.warn(error);
//     });




const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("2 segundos despues")
            const heroe = getHeroesById(id);

            // console.log(heroe);

            if (heroe)
                resolve(heroe);
            else
                reject("Heroe no encontrado")

            // reject('No se pudo encontrar el heroe');

        }, 2000);
    });
}

getHeroeByIdAsync(5)
    // .then(result => console.log(result))
    .then(console.log)
    // .catch(error => console.error(error));
    .catch(console.error);
