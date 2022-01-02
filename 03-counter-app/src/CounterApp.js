import React, { useState } from "react";
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    // console.log(counter)

    // handleAdd
    const handleAdd = (e) => {
        // console.log(e);
        // return () => { console.log('Hola mundo') };

        // setCounter(counter + 1);
        setCounter((c) => c + 1);


    };

    const handleReset = () => {
        setCounter(value);
    };

    const handleSubstract = () => {
        setCounter((c) => c - 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            {/* <h2> {value} </h2> */}
            <h2> {counter} </h2>

            {/* <button onClick={(e) => handleAdd(e)}>+1</button> */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    // value: PropTypes.number.isRequired
};

export default CounterApp;