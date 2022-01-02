const persona = {
    nombre: "Tony",
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 5465465,
        lat: 14.4564,
        long: 34.465
    }
};

console.log({ persona });

//no es una copia es una referencia
// const persona2 = persona;

//una copia
const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log({ persona2 });

console.log({ persona });
