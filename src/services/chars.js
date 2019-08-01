import base from './base'

const get_all_characters = () => base.get('characters')
const get_character = (id) => base.get(`/characters/${id}`)
const get_character_comics = (id) => base.get(`/characters/${id}/comics`)
const get_character_events = (id) => base.get(`/characters/${id}/events`)
const get_character_series = (id) => base.get(`/characters/${id}/series`)
const get_character_stories = (id) => base.get(`/characters/${id}/stories`)

export default {
  get_all_characters,
  get_character,
  get_character_comics,
  get_character_series,
  get_character_events,
  get_character_stories
}
