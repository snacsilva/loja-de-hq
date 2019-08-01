import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '6a421f1e4fd5ba9f9310e924e9cbabc9';

export default {
    get: (info) => axios.get(urlBaseMarvel + info + `?apikey=${apiKey}` ),
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}
