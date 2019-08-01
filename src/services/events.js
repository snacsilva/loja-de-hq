import base from './base'

const get_all_events = () => base.get('events')
const get_event = (id) => base.get(`/events/${id}`)
const get_event_chars = (id) => base.get(`/events/${id}/characters`)
const get_event_creators = (id) => base.get(`/events/${id}/creators`)
const get_event_events = (id) => base.get(`/events/${id}/events`)
const get_event_stories = (id) => base.get(`/events/${id}/stories`)

export default {
  get_all_events,
  get_event,
  get_event_chars,
  get_event_creators,
  get_event_events,
  get_event_stories
}
