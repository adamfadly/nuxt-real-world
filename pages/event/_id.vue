<template>
  <div>
    <h1 class="text-red-800"> {{ event.title }}</h1>
  </div>
</template>

<script>
import {fetchEvent} from '../../services/eventsServices';
  export default {
    head(){
      return{
      title: "event " + this.event.title,
        meta: 
        [
          { 
            hid: 'description',
            name: 'description',
            content: 'you can create a new event in your neighborhood ' + this.event.title
          }
        ]
      }
    },

    async asyncData({ $axios, error, params }) {
      console.log(params)
      try {
        const { data } = await fetchEvent(params.id)
        return {
          event: data
        }
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch event #' + params.id
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>