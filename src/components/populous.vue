<template>
  <table>
      <tr>
        <th>Country</th>
        <th>Population</th>
      </tr>
      <tr v-for="(country, index) in twentymilpop" :key="index">
        <td>{{country.name}}</td>
        <td>{{country.population.toLocaleString("en-US")}}</td>
      </tr>
  </table>
</template>

<script>
  export default {
    name: 'Populous',
    props: {
      allinfo: {
        type: Array
      },
      twentymilpop: {
        type: Array
      }
    }
  };
</script>