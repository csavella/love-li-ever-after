<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbar-items">
            <ul class="navbar-nav mx-auto">
              <li><router-link class="navlink" to="/">Home</router-link></li>
              <li><router-link class="navlink" to="/ourstory">Our Story</router-link></li>
              <li><router-link class="navlink" to="/details">Details</router-link></li>
              <li><router-link class="navlink" to="/planning">Planning</router-link></li>
              <li><router-link class="navlink" to="/weddingparty">Wedding Party</router-link></li>
              <li><router-link class="navlink" to="/rsvp">RSVP</router-link></li>
            </ul>
          </div>
      </nav>
      <router-view :time="times"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    startTime: Date.now(),
    endTime: "Sept 18, 2021 17:00:00",
    times: [
      { id: 0, text: "Days", time: 1 },
      { id: 1, text: "Hours", time: 1 },
      { id: 2, text: "Minutes", time: 1 },
      { id: 3, text: "Seconds", time: 1 }
    ],
    progress: 100,
    // isActive: false,
    timeinterval: undefined
    }
  },
  methods: {
    updateTimer: function() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeinterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date());
      if(t >= 0){
      this.times[3].time = Math.floor(t / 1000 % 60); //seconds
      this.times[2].time = Math.floor(t / 1000 / 60 % 60); //minutes
      this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); //hours
      this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
       }else {
         this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
         this.progress = 0;
       }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
        (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2);
      this.progress = 100-interval;
    }
  },
  created: function() {
    this.updateTimer();
    this.timeinterval = setInterval(this.updateTimer, 1000);
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Great%20Vibes");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url("assets/venue1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c6dbf1;
}

h1 {
  font-family: 'Great Vibes', Avenir, Helvetica, Arial, sans-serif;
}

/*navigation bar*/
.navbar {
  opacity: 0.9;
}
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

</style>
