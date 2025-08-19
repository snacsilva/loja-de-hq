import axios, { AxiosResponse } from 'axios';
import { marvelApi, getAuthParams } from '../config/environment';

const baseURL = marvelApi.defaults.baseURL;

axios.defaults.baseURL = baseURL;

const api = {
  get: async <T>(url: string, params = {}): Promise<AxiosResponse<T>> => {
    const authParams = getAuthParams();
    
    return axios.get<T>(url, {
      params: { ...params, ...authParams }
    });
  }
};


export default api;
