// const getImagePromise = () =>
//     new Promise(resolve => resolve('https://asdjalksdj.com'));

// getImagePromise().then(console.log);


const getImage = async () => {
    try {
        const apiKey = 'ZQrbzc9bqBswNy9P4V0sO6OKWUZbqG0V';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();

        console.log(data);

        const { url } = data.images.original;

        const img = document.createElement('img');

        img.src = url;

        document.body.append(img);

    } catch (error) {
        console.error({ error })
    }


};

getImage();

// getImage().then(console.log);




// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         console.log(url);

//         const img = document.createElement('img');


//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn);
