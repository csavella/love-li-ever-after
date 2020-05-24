<template>
  <div>
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
.timer {
    color: white;
}
.label {
    color: #4e6173;
    font-size: 1.3em;
}
.number {
    background-color: #4e6173;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    font-size: 2em;
    text-align: center;
    opacity: 0.8;
}

</style>