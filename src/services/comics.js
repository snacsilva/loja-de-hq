import base from './base';

const getAllComics = () => base.get('comics');
const getComic = id => base.get(`/comics/${id}`);
const getComicChars = id => base.get(`/comics/${id}/characters`);
const getComicCreators = id => base.get(`/comics/${id}/creators`);
const getComicEvents = id => base.get(`/comics/${id}/events`);
const getComicStories = id => base.get(`/comics/${id}/stories`);

export default {
  getAllComics,
  getComic,
  getComicChars,
  getComicCreators,
  getComicEvents,
  getComicStories
};
