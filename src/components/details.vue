<template>
  <div class="details">
    <div class="container greyblock">
      <div class="celebration">
        <h2>Ceremony and Reception</h2>
        SATURDAY, SEPTEMBER 18, 2021<br>
        4:30 - 10:00 PM HST<br>
        <a href="https://olowaluplantationhouse.com/"><h3>Olowalu Plantation House</h3></a>
        810 Olowalu Village Road<br>
        Lahaina, Hawaii 96761<br>
        <button class="btn btn-info" @click="newTab()">View Map</button>
      </div>
      <div class="card-deck">
        <div class="card text-muted">
          <div class="card-body text-muted">
            <h5 class="card-title">Weather</h5>
            <p class="card-text">Expect Lahaina in mid-September to be hot; mid to high 80s and humid.
              Our ceremony will be outdoors and will start during the hottest part of the day. There will be plenty of shade,  
              but be sure to wear sunscreen. You're welcome to wear a sunhat too.
            </p>
          </div>
        </div>
        <div class="card text-muted">
          <div class="card-body text-muted">
            <h5 class="card-title">Dress Code</h5>
            <p class="card-text">We want our guests to be comfortable, so think tropical! For men, consider wearing a short-sleeve button down shirt with khakis or slacks. 
      Hawaiian shirts and guayabera shirts are encouraged. For ladies, we recommend tropical sundresses, maxi dresses, etc. with sandals or wedges.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&#169;2021. Designed and coded by Chastity Savella.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'details',
    methods: {
      newTab: function() {
        window.open("https://www.google.com/maps/place/Olowalu+Plantation+House/@20.8103194,-156.6257859,17z/data=!3m1!4b1!4m5!3m4!1s0x7954d627207ca707:0x77460d251222ff48!8m2!3d20.8103194!4d-156.6235972", "_blank");
      }
    }
}
</script>

<style>
.celebration{
    padding-top: 50px;
    padding-bottom: 50px;
}
button {
    padding: 20px;
    opacity: 0.6;
}
a {
  color: white;
}
a:hover {
  color: white;
  text-decoration: underline;
}
</style>