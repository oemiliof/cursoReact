

export const getImagen = async () => {

    try {

        const apiKey = 'ZQrbzc9bqBswNy9P4V0sO6OKWUZbqG0V';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }



}

getImagen();



