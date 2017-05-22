<script>
  export default {
    name: "Navbar"
  }
</script>

<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left navbar-menu-btn">
        <!--<ul class="dropdown menu" data-dropdown-menu>-->
          <!--<li class="menu-text">Teem Web</li>-->
          <!--<li><router-link to="dashboard">Dashboard</router-link></li>-->
          <!--<li><router-link to="about">About</router-link></li>-->
          <!--&lt;!&ndash;<li><router-link to="quote">Quote</router-link></li>&ndash;&gt;-->
        <!--</ul>-->
          <button class="icon-button">
              <span class="glyphicon glyphicon glyphicon-option-vertical"></span>
          </button>
      </div>
      <div class="top-bar-left navbar-logo">
        <!--<ul class="dropdown menu" data-dropdown-menu>-->
          <!--<li class="menu-text">Teem Web</li>-->
          <!--<li><router-link to="dashboard">Dashboard</router-link></li>-->
          <!--<li><router-link to="about">About</router-link></li>-->
          <!--&lt;!&ndash;<li><router-link to="quote">Quote</router-link></li>&ndash;&gt;-->
        <!--</ul>-->
          <h1>TeemApp</h1>
      </div>
      <div class="top-bar-right navbar-chats-btn">
          <button class="icon-button">
              <span class="glyphicon glyphicon-comment"></span>
          </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
    .navbar-menu-btn, .navbar-chats-btn{
        width:5%!important;
        text-align:center;
    }
    .navbar-logo{
        width:90%!important;
        text-align: center;
    }
    .navbar-logo h1{
        font-size: 20px;
        margin:0;
    }

</style>