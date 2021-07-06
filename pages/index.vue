<template>
  <div class="container flex items-center justify-center margin-0 w-full">
    <h1 class="font-bold text-2xl">Events</h1>
    <event-card v-for="(event, index) in events" :key="index" data-index="index" :event="event"></event-card>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import {fetchEvents} from "../services/eventsServices"
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


  async asyncData({ error }) {
        try {
          const { data } = await fetchEvents()
          return {
            events: data
          }
        } catch (e) {
          error({
            statusCode: 503,
            message: 'Unable to fetch events events at this time'
          })
        }
      },
}

</script>

<style>
</style>
