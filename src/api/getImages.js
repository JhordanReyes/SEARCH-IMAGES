import axios from 'axios';

const baseURL = "https://pixabay.com/api/?key=24627846-00e8135d5c6ffdbc97436363e"

export const getImages = async(buscar) => {
    const { data } = await axios.get(`${baseURL}&q=${buscar}&image_type=photo`);
    return {
        total: data.total,
        images: data.hits,
    }
}