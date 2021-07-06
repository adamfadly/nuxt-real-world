
import {fetchEvents, fetchEvent} from "../services/eventsServices"

export const state = () => ({
  events: [],
  event: {}
})

export const mutations = {
  SET_EVENTS(state, events){
    state.events = events
  },
  SET_EVENT(state,event) {
    state.event = event
  }
}

export const actions = {
  async getEvents(context){
    const response = await fetchEvents()
    context.commit("SET_EVENTS", response)
  }, 

  // fetchEvent
  async getEvent(context,id) {
    const response = await fetchEvent(id)
    console.log(response, "vuex")
    context.commit("SET_EVENT", response)
  }
}