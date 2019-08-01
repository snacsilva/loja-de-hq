import base from './base'

const get_all_series = () => base.get('series')
const get_serie = (id) => base.get(`/series/${id}`)
const get_serie_chars = (id) => base.get(`/series/${id}/characters`)
const get_serie_comics = (id) => base.get(`/series/${id}/comics`)
const get_serie_creators = (id) => base.get(`/series/${id}/creators`)
const get_serie_events = (id) => base.get(`/series/${id}/events`)
const get_serie_stories = (id) => base.get(`/series/${id}/stories`)

export default {
  get_all_series,
  get_serie,
  get_serie_chars,
  get_serie_comics,
  get_serie_creators,
  get_serie_events,
  get_serie_stories
}
