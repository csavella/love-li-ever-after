<template>
  <table>
      <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Population</th>
        <th>Region</th>
        <th>Subregion</th>
      </tr>
      <tr v-for="(country, index) in allinfo" :key="index">
        <td>{{country.name}}</td>
        <td>{{country.capital}}</td>
        <td>{{country.population.toLocaleString("en-US")}}</td>
        <td>{{country.region}}</td>
        <td>{{country.subregion}}</td>
      </tr>
  </table>
</template>

<script>
  export default {
    name: 'allinfo',
    props: {
      allinfo: {
        type: Array
      }
    }
  };
</script>