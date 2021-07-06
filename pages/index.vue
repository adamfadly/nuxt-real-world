<template>
  <div class="container flex items-center justify-center margin-0 w-full">
    <h1 class="font-bold text-2xl">Events</h1>
    <event-card v-for="(event, index) in events" :key="index" data-index="index" :event="event"></event-card>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import {mapState} from "vuex"
export default {
  components: { EventCard },
  head(){
    return {
        title: 'Learn nuxt in Hurry',
        meta: [
          { 
            hid: 'description',
            name: 'description',
            content: 'you can create a new event in your neighborhood'
          }
        ]
      }
  },


  async fetch({ store, error }) {
    try {
      await store.dispatch("events/getEvents")
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events events at this time'
      })
    }
  },

  computed: mapState({
    events: state => state.events.events
  })
}


</script>

<style>
</style>
