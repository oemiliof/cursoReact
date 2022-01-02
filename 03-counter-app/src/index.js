import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';



import './index.css'

// const saludo = <h1>Hola mundo1a</h1>;

// referencia por id a elemento

// const divRoot = document.querySelector('#app');

// console.log(divRoot);

// ReactDOM.render(saludo, divRoot);

const divRoot = document.querySelector('#app');

// ReactDOM.render(
//     <PrimeraApp
//         saludo="Hola, soy Goku"
//         otra={123}
//     />, divRoot);

ReactDOM.render(
    <CounterApp
        // value={0}
    />
    , divRoot
);

// ReactDOM.render(
//     <PrimeraApp
//         saludo='Hola soy Goku'
//     />, divRoot);



