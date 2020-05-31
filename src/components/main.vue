<template>
  <div class="main">
    <div class="container greyblock">
      <h1>Kevin &amp; Chastity</h1>
      <h3>September 18, 2021 in Lahaina, HI</h3>
      <section class="flex-container timer">
          <div class="flex-item number">{{ time[0].time }}</div>
          <div class="flex-item number">{{ time[1].time }}</div>
          <div class="flex-item number">{{ time[2].time }}</div>
          <div class="flex-item number">{{ time[3].time }}</div>
      </section>
      <section class="flex-container labels">
          <div class="flex-item label">Days</div>
          <div class="flex-item label">Hours</div>
          <div class="flex-item label">Minutes</div>
          <div class="flex-item label">Seconds</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    name: 'main',
    props: {
      time: []
    }
}
</script>

<style>

.greyblock {
    background-color: #4e6173;
    color: white;
}
h1 {
    font-size: 5em;
    padding-top: 50px;
    padding-bottom: 50px;
}
h3 {
    padding: 30px;
}
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: center;
}
.flex-item {
  width: 100px;
  height: 50px;
  margin: 5px;
}
.label {
    font-size: 1.3em;
}
.number {
    background-color: #4e6173;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 2em;
    text-align: center;
}
</style>