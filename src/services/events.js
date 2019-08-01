import base from './base'

const getAllEvents = () => base.get('events')
const getEvent = (id) => base.get(`/events/${id}`)
const getEventChars = (id) => base.get(`/events/${id}/characters`)
const getEventCreators = (id) => base.get(`/events/${id}/creators`)
const getEventEvents = (id) => base.get(`/events/${id}/events`)
const getEventStories = (id) => base.get(`/events/${id}/stories`)

export default {
  getAllEvents,
  getEvent,
  getEventChars,
  getEventCreators,
  getEventEvents,
  getEventStories
}
