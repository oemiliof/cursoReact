import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(
        <CounterApp />
    );;

    beforeEach(() => {
        wrapper = shallow(
            <CounterApp />
        );
    });

    test('debe de mostrar <CounterApp /> correctamente (hacer match coun un snapshot) y sus valores por defecto', () => {
        const wrapper = shallow(
            <CounterApp />
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto 100', () => {
        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );

        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('100');

    });

    test('debe de incrementar el contador con el boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counter = wrapper.find('h2').text().trim();


        expect(counter).toBe('11');

    });

    test('debe de disminuir el contador con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counter = wrapper.find('h2').text().trim();


        expect(counter).toBe('9');

    });

    test('debe de reiniciar el contador con el boton de reset', () => {

        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('100');

    });

});