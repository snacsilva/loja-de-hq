import base from './base';

const getAllStories = () => base.get('stories');
const getStorie = id => base.get(`/stories/${id}`);
const getStorieChars = id => base.get(`/stories/${id}/characters`);
const getStorieComics = id => base.get(`/stories/${id}/comics`);
const getStorieCreators = id => base.get(`/stories/${id}/creators`);
const getStorieEvents = id => base.get(`/stories/${id}/events`);
const getStorieSeries = id => base.get(`/stories/${id}/series`);

export default {
 getAllStories,
 getStorie,
 getStorieChars,
 getStorieComics,
 getStorieCreators,
 getStorieEvents,
 getStorieSeries
};
