<template>
  <div>
    <h3>ログインしてます</h3>
    <template v-if="user">
      <h3>
        Firebase Auth UID : {{ user.uid }}
      </h3>
      <UserDetail :user="user" />
      <div
        v-for="(u,i) in user.providerData"
        :key="i">
        <UserDetail :user="u" />
      </div>
    </template>
  </div>
</template>

<script>
import UserDetail from '@/components/authentication/UserDetail.vue';

export default {
  name: 'UserList',
  components: {
    UserDetail
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['user'],
};
</script>
