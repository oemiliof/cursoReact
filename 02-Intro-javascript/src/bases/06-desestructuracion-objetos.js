// desestructuracion 
// asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const { nombre } = persona;

// console.log(nombre);

// const { nombre: nombre2 } = persona;

// console.log(nombre2);

// persona.nombre = "test";

// console.log(nombre2);


// const retornaPersona = (usuario) => {

//     const { edad, clave, nombre } = usuario;

//     console.log(nombre);
//     console.log(edad);
//     console.log(clave);
// };

const test = ({ nombre, edad, rango = 'Capitan', clave }) => {


    console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 45.12564,
            lng: 4.456
        }
    }
};

const { nombreClave, anios, latlng: { lat, lng } } = test(persona);

console.log(nombreClave, anios, lat, lng)

