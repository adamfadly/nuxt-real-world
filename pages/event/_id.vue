<template>
  <div>
    <h1 class="text-red-800">Event {{id}}</h1>
  </div>
</template>

<script>
  export default {
      head(){
    return{
    title: "event  "+ this.id,
    meta: [
      { 
        hid: 'description',
        name: 'description',
        content: 'you can create a new event in your neighborhood'
      }
    ]
   
  }
   }, computed: {
      id() {
        return this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>