import axios from "axios";
import md5 from "md5";

const publicKey = process.env.REACT_APP_MARVEL_API_KEY as string;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY as string;
const baseURL = process.env.REACT_APP_MARVEL_API_BASE_URL as string || 'https://gateway.marvel.com/v1/public/';

export const marvelApi = axios.create({
  baseURL,
});

export const getAuthParams = () => {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);

  return {
    ts,
    apikey: publicKey,
    hash,
  };
};
