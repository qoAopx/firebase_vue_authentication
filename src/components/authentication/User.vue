<template>
  <div>
    <h1>ログインしてます</h1>
    <div v-if="user">
      <div
        v-for="(u,i) in user.providerData"
        :key="i">
        <h4 v-if="u.providerId">
          {{ u.providerId }}
        </h4>
        <ul>
          <li v-if="u.uid">
            uid : {{ u.uid }}
          </li>
          <li v-if="u.displayName">
            displayName : {{ u.displayName }}
          </li>
          <li v-if="u.email">
            email : {{ u.email }}
          </li>
          <li v-if="u.photoURL">
            photoURL :
            <img
              :src="u.photoURL"
              style="height:64px;">
          </li>
          <li v-if="user.phoneNumber">
            phoneNumber : {{ user.phoneNumber }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['user']
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
