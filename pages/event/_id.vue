<template>
  <div>
    <h1 class="text-red-800"> {{ event.title }}</h1>
  </div>
</template>

<script>
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
        const { data } = await $axios.get(`http://localhost:3000/events/${params.id}`)
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