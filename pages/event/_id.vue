<template>
  <div>
    <h1 class="text-red-800"> {{ event.title }}</h1>
  </div>
</template>

<script>
import {mapState} from "vuex"
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

    async fetch({ store, params, error })  {
      let id = params.id
      try {
        await store.dispatch('events/getEvent', id)
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch event #' + id
        })
      }
    },
    computed: mapState({
        event: state => state.events.event
      })
  }
</script>

<style lang="scss" scoped>

</style>