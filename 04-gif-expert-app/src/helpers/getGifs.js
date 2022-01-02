export const getGifs = async (category) => {
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZQrbzc9bqBswNy9P4V0sO6OKWUZbqG0V&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
