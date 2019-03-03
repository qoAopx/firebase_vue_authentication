<template>
  <div>
    <h3>ログインしてます</h3>
    <template v-if="user">
      <div v-for="(u,i) in user.providerData" :key="i">
        <table>
          <caption v-if="u.providerId">
            <h4>{{ u.providerId }}</h4>
          </caption>
          <thead>
            <tr v-if="u.uid">
              <th>item</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="u.uid">
              <td>uid</td>
              <td>{{ u.uid }}</td>
            </tr>
            <tr v-if="u.displayName">
              <td>displayName</td>
              <td>{{ u.displayName }}</td>
            </tr>
            <tr v-if="u.email">
              <td>email</td>
              <td>{{ u.email }}</td>
            </tr>
            <tr v-if="u.photoURL">
              <td>photoURL</td>
              <td>
                <img :src="u.photoURL" style="height:64px;">
              </td>
            </tr>
            <tr v-if="user.phoneNumber">
              <td>phoneNumber</td>
              <td>{{ user.phoneNumber }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["user"]
};
</script>

<style scoped>
table {
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
  border: 1px solid #aaaaaa;
  background-color: #ffffff;
  padding: 0.2rem 1rem;
}
</style>
