<template>
  <table>
      <tr>
        <th>Country</th>
        <th>Capital</th>
      </tr>
      <tr v-for="(country, index) in allinfo" :key="index">
        <td>{{country.name}}</td>
        <td>{{country.capital}}</td>
      </tr>
  </table>
</template>

<script>
  export default {
    name: 'Main',
    props: {
      allinfo: {
        type: Array
      }
    }
  };
</script>

<style>
table {
  text-align: left;
  margin: 10px auto;
  border: black solid 2px;
  background-color: white;
}
td, th {
  padding-right: 5px;
  padding-left: 5px;
}
th {
  font-size: 25px;
  text-decoration: underline;
}
.regioninfo {
  text-align: center;
}
</style>