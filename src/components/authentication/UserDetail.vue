<template>
  <table>
    <caption v-if="user.providerId">
      <h4>providerId: {{ user.providerId }}</h4>
    </caption>
    <thead>
      <tr v-if="user.uid">
        <th style="width:140px;">
          item
        </th>
        <th>value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="user.uid">
        <td>uid</td>
        <td>{{ user.uid }}</td>
      </tr>
      <tr v-if="user.displayName">
        <td>displayName</td>
        <td>{{ user.displayName }}</td>
      </tr>
      <tr v-if="user.email">
        <td>email</td>
        <td>{{ user.email }}</td>
      </tr>
      <tr v-if="user.photoURL">
        <td>photoURL</td>
        <td>
          <img
            :src="user.photoURL"
            style="height:64px;">
        </td>
      </tr>
      <tr v-if="user.phoneNumber">
        <td>phoneNumber</td>
        <td>{{ user.phoneNumber }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserDetail',
  // eslint-disable-next-line vue/require-prop-types
  props: ['user']
};
</script>

<style scoped>
table {
  width: 100%;
  max-width: 480px;
  border-collapse: collapse;
  border: 1px solid #aaaaaa;
  background-color: #eeeeee;
  margin: 0 auto 2rem auto;
}
tr {
  vertical-align: middle;
}
th {
  border: 1px solid #aaaaaa;
  background-color: #eeeeee;
}
td {
  word-break: break-all;
  border: 1px solid #aaaaaa;
  background-color: #ffffff;
  padding: 0.2rem 1rem;
}
</style>
