<script>
  export default {
    name: "Navbar"
  }
</script>

<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Teem Web</li>
          <li><router-link to="dashboard">Dashboard</router-link></li>
          <li><router-link to="about">About</router-link></li>
          <!--<li><router-link to="quote">Quote</router-link></li>-->
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">

        </ul>
      </div>
    </div>
  </div>
</template>