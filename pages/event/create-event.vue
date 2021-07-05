<template>
  <div class="flex items-center justify-center">
      <h1 class="font-bold text-2xl">Create an Event</h1>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'
export default {
  components: { NavBar },
  head(){
    return{
    title: 'Yolo',
    meta: [
      { 
        hid: 'description',
        name: 'description',
        content: 'you can create a new event in your neighborhood'
      }
    ]
    }
  }

}
</script>

<style>

</style>