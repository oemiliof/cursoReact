// funciones en js 

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// saludar = 30;

console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'user_test'
});

const user = getUser();

console.log({ user });


// tarea

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Oscar');


const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Oscar');

console.log(usuarioActivo);