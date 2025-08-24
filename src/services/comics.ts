import base from './base';
import { Comic, MarvelApiResponse, AxiosMarvelResponse } from '../types';

const getAllComics = (): Promise<AxiosMarvelResponse<Comic>> => base.get<MarvelApiResponse<Comic>>('comics');
const getComic = (id: number): Promise<AxiosMarvelResponse<Comic>> => base.get<MarvelApiResponse<Comic>>(`/comics/${id}`);
const getComicChars = (id: number) => base.get(`/comics/${id}/characters`);
const getComicCreators = (id: number) => base.get(`/comics/${id}/creators`);
const getComicEvents = (id: number) => base.get(`/comics/${id}/events`);
const getComicStories = (id: number) => base.get(`/comics/${id}/stories`);

const comicsService = {
  getAllComics,
  getComic,
  getComicChars,
  getComicCreators,
  getComicEvents,
  getComicStories
};

export default comicsService;
