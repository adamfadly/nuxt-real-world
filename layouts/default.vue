<template>
  <div class="flex  flex-col items-center justify-center">
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';



export default {
  components: {
    NavBar
  },
};
</script>


<style>

</style>
