import * as types from './types';

export default {
 [types.COMICS]: (state, comics) => {
  state.comics = comics;
 }
};
