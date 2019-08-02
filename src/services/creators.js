import base from './base';

const getAllCreators = () => base.get('creators');
const getCreator = id => base.get(`/creators/${id}`);
const getCreatorComics = id => base.get(`/creators/${id}/comics`);
const getCreatorSeries = id => base.get(`/creators/${id}/series`);
const getCreatorEvents = id => base.get(`/creators/${id}/events`);
const getCreatorStories = id => base.get(`/creators/${id}/stories`);

export default {
  getAllCreators,
  getCreator,
  getCreatorComics,
  getCreatorSeries,
  getCreatorEvents,
  getCreatorStories
};
