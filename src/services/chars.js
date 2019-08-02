import base from './base';

const getAllCharacters = () => base.get('characters');
const getCharacter = id => base.get(`/characters/${id}`);
const getCharacterComics = id => base.get(`/characters/${id}/comics`);
const getCharacterEvents = id => base.get(`/characters/${id}/events`);
const getCharacterSeries = id => base.get(`/characters/${id}/series`);
const getCharacterStories = id => base.get(`/characters/${id}/stories`);

export default {
  getAllCharacters,
  getCharacter,
  getCharacterComics,
  getCharacterSeries,
  getCharacterEvents,
  getCharacterStories
};
