import React, { useState } from 'react'
import AddCategory from './Categorias/AddCategory';
import GifGrid from './Categorias/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Fragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories([...categories, ('test ' + parseInt(categories.length + 1))]);
    //     // setCategories([('test ' + parseInt(categories.length + 1)), ...categories]);
    //     setCategories(cats => [...categories, ('test ' + parseInt(categories.length + 1))]);



    //     console.log(categories);
    // };

    // console.log(categories)

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
