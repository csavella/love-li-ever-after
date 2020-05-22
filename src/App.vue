<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar-items">
          <ul class="navbar-nav mx-auto">
            <li><router-link class="navlink" to="/main">Home</router-link></li>
            <li><router-link class="navlink" to="/ourstory">Our Story</router-link></li>
            <li><router-link class="navlink" to="/details">Details</router-link></li>
            <li><router-link class="navlink" to="/weddingparty">Wedding Party</router-link></li>
            <li><router-link class="navlink" to="/rsvp">RSVP</router-link></li>
          </ul>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*navigation bar*/
li {
    display: inline-flex;
    padding: 5px 30px 5px 30px;
    vertical-align: middle;
} 

.navlink {
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bolder;
    color: #8e3155;
}

.navlink:hover, .navlink:focus, .navlink:active {
    color: #4e6173;
    text-decoration: none;
}

body {
  background-color: #c6dbf1;
}

</style>
