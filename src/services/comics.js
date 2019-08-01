import base from './base'

const get_all_comics = () => base.get('comics')
const get_comic = (id) => base.get(`/comics/${id}`)
const get_comic_chars = (id) => base.get(`/comics/${id}/characters`)
const get_comic_creators = (id) => base.get(`/comics/${id}/creators`)
const get_comic_events = (id) => base.get(`/comics/${id}/events`)
const get_comic_stories = (id) => base.get(`/comics/${id}/stories`)

export default {
  get_all_comics,
  get_comic,
  get_comic_chars,
  get_comic_creators,
  get_comic_events,
  get_comic_stories
}
