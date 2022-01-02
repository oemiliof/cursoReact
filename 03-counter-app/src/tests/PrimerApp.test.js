import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimerApp />', () => {
    // test('debe de mostrar el mensaje "Hola soy Goku"', () => {

    //     const saludo = 'Hola, soy Goku';
    //     const saludo2 = 'Hola, soy Goku';

    //     const { getByText } = render(
    //         <PrimeraApp
    //             saludo={saludo}
    //         />
    //     );

    //     expect(getByText(saludo2)).toBeInTheDocument;

    // });

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';

        const wrapper = shallow(
            <PrimeraApp saludo={saludo} />
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Hola, soy un subtitlo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    });


});