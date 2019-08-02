import Vue from 'vue';
import Vuex from 'vuex';
import comics from './comics/index';
import chars from './chars/index';
import creators from './creators/index';
import events from './events/index';
import series from './series/index';
import stories from './stories/index';

Vue.use(Vuex);

const store = new Vuex.Store({
 modules: {
  comics,
  chars,
  creators,
  events,
  series,
  stories
 }
});

export default store;
