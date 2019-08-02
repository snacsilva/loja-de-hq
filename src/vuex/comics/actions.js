import service from '@/services/comics';
import * as types from './types';

export default {
 [types.GETALLCOMICS]: ({ commit }) =>
  service.getAllComics().then(comics => commit(types.COMICS, comics.data.data.results)),
 [types.GETCOMIC]: ({ commit }, comic_id) =>
  service.getComic(comic_id).then(comics => commit(types.COMICS, comics.data.data.results))
};
