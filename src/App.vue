<template>
    <div id="app">
      <!-- NOT SURE IF THIS TAG IS NECESSARY. LEAVING COMMENTED JUST IN CASE
      <v-app id="weddingapp">-->
        <nav class="navbar navbar-expand-lg navbar-dark scrolling-navbar bg-dark" role="navigation" id="scroll-target">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-items">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar-items">
              <ul class="navbar-nav mx-auto">
                <li><router-link class="navlink" to="/" data-toggle="collapse" data-target=".navbar-collapse.show">Home</router-link></li>
                <!--<li><router-link class="navlink" to="/ourstory" data-toggle="collapse" data-target=".navbar-collapse.show">Our Story</router-link></li>-->
                <li><router-link class="navlink" to="/details" data-toggle="collapse" data-target=".navbar-collapse.show">Venue Details</router-link></li>
                <li><router-link class="navlink" to="/travel" data-toggle="collapse" data-target=".navbar-collapse.show">Travel Info</router-link></li>
                <!--<li><router-link class="navlink" to="/planning" data-toggle="collapse" data-target=".navbar-collapse.show">Planning</router-link></li>-->
                <!--<li><router-link class="navlink" to="/weddingparty" data-toggle="collapse" data-target=".navbar-collapse.show">Wedding Party</router-link></li>-->
                <li><router-link class="navlink" to="/rsvp" data-toggle="collapse" data-target=".navbar-collapse.show">RSVP</router-link></li>
              </ul>
            </div>
        </nav>
        <router-view :time="times" :partyppl="partypplAPIdata" :bitems="budgetAPIdata" :vendors="vendorsAPIdata" :tasks="tasksAPIdata" :guestsAPI="guestAPIdata"></router-view>
        <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="info" @click="toTop">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>          
      <!--</v-app>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
    partypplAPIdata: [],
    budgetAPIdata: [],
    guestsAPIdata: [],
    tasksAPIdata: [],
    vendorsAPIdata: [],

    fab: false,
    startTime: Date.now(),
    endTime: "Sept 18, 2021 19:30:00",
    times: [
      { id: 0, text: "Days", time: 1 },
      { id: 1, text: "Hours", time: 1 },
      { id: 2, text: "Minutes", time: 1 },
      { id: 3, text: "Seconds", time: 1 }
    ],
    progress: 100,
    timeinterval: undefined
    }
  },
  mounted() {
        let sheetsuParty = "https://sheetsu.com/apis/v1.0su/eded8760576f"
        let sheetsuBudget = "https://sheetsu.com/apis/v1.0su/de90e9842a02"
        let sheetsuGuests = "https://sheetsu.com/apis/v1.0su/33fd43026ba4"
        let sheetsuTasks = "https://sheetsu.com/apis/v1.0su/971084032f1d"
        let sheetsuVendors = "https://sheetsu.com/apis/v1.0su/02e39cefb1c3"

        const requestParty = axios.get(sheetsuParty);
        const requestBudget = axios.get(sheetsuBudget);
        const requestGuests = axios.get(sheetsuGuests);
        const requestTasks = axios.get(sheetsuTasks);
        const requestVendors = axios.get(sheetsuVendors);

        axios.all([requestParty,requestBudget,requestGuests,requestTasks,requestVendors
        ]).then(axios.spread((...responses) => {
            this.partypplAPIdata = responses[0].data
            this.budgetAPIdata = responses[1].data
            this.guestAPIdata = responses[2].data
            this.tasksAPIdata = responses[3].data
            this.vendorsAPIdata = responses[4].data
        })).catch(errors => {
            console.log('Request failed', errors);
        })
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    },
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

.names {
  background-image: 
  linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 1%, transparent),
  url("assets/012421candk016.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c6dbf1;
  width: 100vw;
  height: 80vh;
}

.main2{
  background-image: 
  linear-gradient(0.25turn, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.73)),
  url("assets/012421candk042.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c6dbf1;
  width: 100vw;
  height: 70vh;
}

/*media queries*/
@media (max-width:600px) {
  .names, .main2, .rsvp, .submitted {
      background-attachment: scroll;
  }
}

@media (max-width:576px) {
    .names, .main2, .rsvp, .submitted {
        background-attachment: scroll;
    }
}

.details, .travel {
  background-image: 
  linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 10%, transparent),
  url("https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=pexels-pixabay-269583.jpg&fm=jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c6dbf1;
  width: 100vw;
  height: 80vh;
}

.rsvp, .submitted {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 10%, transparent),
  url("assets/012421candk071.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #c6dbf1;
  width: 100vw;
  height: 100vh;
}

h1, .bmlink, .gmlink, .announcement, .formtitle, .traveltitle {
  font-family: 'Great Vibes', Avenir, Helvetica, Arial, sans-serif;
}

/*navigation bar*/
.navbar {
  opacity: 0.5;
}

li {
    display: inline-flex;
    padding: 5px 30px 5px 30px;
    vertical-align: middle;
} 

.navlink {
    text-decoration: none;
    font-size: 1em;
    font-weight: bolder;
    color: #ffffff;
}

.navlink:hover, .navlink:focus, .navlink:active {
    color: #ffffff;
    text-decoration: underline;
}

/*wedding party cards*/
.gcard:hover {
  background-image: url("https://i.imgur.com/Uur66PW.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

.bcard:hover {
  background-image: url("https://i.imgur.com/rRBTMqM.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

</style>
