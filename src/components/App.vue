<script>
  import Navbar from './common/Navbar.vue'

  
  export default {
    name: "app",

    components: {
      Navbar
    }
  }
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>