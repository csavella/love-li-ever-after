<template>
  <div id="app">
    <router-link class="rlink" to="/main">Main</router-link>
    <router-link class="rlink" to="/populous">Populous</router-link>
    <router-link class="rlink" to="/regions">Regions</router-link>
    <router-link class="rlink" to="/allinfo">All Info</router-link>
    <router-view :allinfo="countries" :twentymilpop="pop" :regioncount="regcountries"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      pop: [],
      countries: [],
      regcountries: []
    }
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
          this.countries = response.data;
          this.popOverTwentyMil();
          this.numCountriesInRegion();
      })
      .catch(error => {
          console.log('Request failed', error);
      });
  },
  methods: {
    popOverTwentyMil() {
      this.countries.forEach((country) => {
        if (country.population > 20000000) this.pop.push(country);
      });
    },
    numCountriesInRegion() {
      this.countries.forEach((country) => {
        var index = this.regcountries.findIndex(p => p.name == country.region);

        if (index < 0) {
          this.regcountries.push({
            name: country.region,
            count: 1
          });
        }
        else {
          this.regcountries[index].count++;
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.rlink {
  display: inline-block;
  margin: 0 10px;
  font-size: 2em;
}
body {
  background-color: #cce5ff;
}
</style>
