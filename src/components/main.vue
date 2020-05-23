<template>
  <table>
      <tr>
        <th>days</th>
        <th>hours</th>
        <th>min</th>
        <th>sec</th>
      </tr>
      <tr>
        <td>{{time[0].time}}</td>
        <td>{{time[1].time}}</td>
        <td>{{time[2].time}}</td>
        <td>{{time[3].time}}</td>
      </tr>
  </table>
</template>

<script>
export default {
    name: 'main',
    props: {
      time: []
    }
}
</script>