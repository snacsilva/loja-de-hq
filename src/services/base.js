import axios from 'axios';

axios.defaults.baseURL = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '6a421f1e4fd5ba9f9310e924e9cbabc9';

export default {
 get: (url, params = {}) => axios.get(url + `?apikey=${apiKey}`, params)
};
