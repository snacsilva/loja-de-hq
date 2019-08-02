import base from './base';

const getAllSeries = () => base.get('series');
const getSerie = id => base.get(`/series/${id}`);
const getSerieChars = id => base.get(`/series/${id}/characters`);
const getSerieComics = id => base.get(`/series/${id}/comics`);
const getSerieCreators = id => base.get(`/series/${id}/creators`);
const getSerieEvents = id => base.get(`/series/${id}/events`);
const getSerieStories = id => base.get(`/series/${id}/stories`);

export default {
 getAllSeries,
 getSerie,
 getSerieChars,
 getSerieComics,
 getSerieCreators,
 getSerieEvents,
 getSerieStories
};
