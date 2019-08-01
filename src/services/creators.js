import base from './base'

const get_all_creators = () => base.get('creators')
const get_creator = (id) => base.get(`/creators/${id}`)
const get_creator_comics = (id) => base.get(`/creators/${id}/comics`)
const get_creator_series = (id) => base.get(`/creators/${id}/series`)
const get_creator_events = (id) => base.get(`/creators/${id}/events`)
const get_creator_stories = (id) => base.get(`/creators/${id}/stories`)

export default {
  get_all_creators,
  get_creator,
  get_creator_comics,
  get_creator_series,
  get_creator_events,
  get_creator_stories
}
