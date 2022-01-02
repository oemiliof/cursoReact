const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1] = personajes;

console.log(p1);

const [, p2] = personajes;

console.log(p2);

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
};


// const arr = retornaArreglo();

// console.log(arr);

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea

const test = (valor) => {
    return [valor, () => console.log('HolaMundo')];
}


const arr = test('Goku');

console.log({ arr })

arr[1]();

const [nombre, setNombre] = arr;
console.log(nombre, setNombre);

setNombre();
