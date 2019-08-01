import base from './base'

const get_all_stories = () => base.get('stories')
const get_storie = (id) => base.get(`/stories/${id}`)
const get_storie_chars = (id) => base.get(`/stories/${id}/characters`)
const get_storie_comics = (id) => base.get(`/stories/${id}/comics`)
const get_storie_creators = (id) => base.get(`/stories/${id}/creators`)
const get_storie_events = (id) => base.get(`/stories/${id}/events`)
const get_storie_series = (id) => base.get(`/stories/${id}/series`)

export default {
  get_all_stories,
  get_storie,
  get_storie_chars,
  get_storie_comics,
  get_storie_creators,
  get_storie_events,
  get_storie_series
}
