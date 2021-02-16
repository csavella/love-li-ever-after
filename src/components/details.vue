<template>
  <div class="details">
    <div class="container greyblock">
      <section class="ceremony">
          <h2>Ceremony and Reception</h2>
          SATURDAY, SEPTEMBER 18, 2021<br>
          4:30 - 10:00 PM<br>
          <h3>Olowalu Plantation House</h3>
          810 Olowalu Village Road<br>
          Lahaina, Hawaii 96761<br>
          <button class="btn btn-info" @click="newTab()">View Map</button>
      </section>
    </div>
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
.ceremony{
    padding: 100px;
}
button {
    padding: 20px;
    opacity: 0.6;
}
</style>