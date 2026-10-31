
export const getGifs = async (category) => {
    const limit = 10;
    const apiKey = "Gc590Wwfbdkuk2yI0IbJrzT3EAmZ4PVw";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(category)}&limit=${limit}`;

    const respuesta = await fetch(url);

    const { data = [] } = await respuesta.json();

    const gifNuevas = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        };
    });

    return gifNuevas;
};
