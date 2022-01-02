
import React from "react";
// import React, { Fragment } from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({
    saludo = "hola mundo"
    , subtitulo
}) => {


    // return <h1> Hola Mundo</h1>;
    // return (
    //     <Fragment>
    //         <h1> Hola Mundo</h1>
    //         <p>Mi aplicacion</p>
    //     </Fragment>
    // );

    // return (
    //     <>
    //         <h1> Hola Mundo</h1>
    //         <p>Mi aplicacion</p>
    //     </>
    // );

    // const saludo = "Hola mundo";
    // const numeros = 123;
    // const numeros2 = 123.123;
    // const booleanos = true;
    // const array = [1, 2, 3, 4, 5];
    // const objeto = { nombre: "Oscar", edad: 27 };
    // return (
    //     <>
    //         <h1>{saludo}</h1>
    //         <h1>{numeros}</h1>
    //         <h1>{numeros2}</h1>
    //         <h1>{booleanos}</h1>
    //         <h1>{array}</h1>
    //         <src>{JSON.stringify(objeto, null, 3)}</src>
    //         <p>Mi aplicacion</p>
    //     </>
    // );

    // if (!saludo)
    //     throw new Error('El saludo es necesario');

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
            {/* <p>Mi aplicacion</p> */}
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    // otra: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
};

export default PrimeraApp;