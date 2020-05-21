<template>
  <table>
      <tr>
        <th>Region</th>
        <th>Num Countries</th>
      </tr>
      <tr v-for="(region, index) in regioncount" :key="index">
        <td class="regioninfo">{{region.name}}</td>
        <td class="regioninfo">{{region.count}}</td>
      </tr>
  </table>
</template>

<script>
  export default {
    name: 'Regions',
    props: {
      allinfo: {
        type: Array
      },
      regioncount: {
        type: Array
      }
    }
  };
</script>

