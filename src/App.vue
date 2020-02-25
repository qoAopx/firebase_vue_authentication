<template>
  <div id="app">
    <div id="nav">
      <div
        v-if="authentication_status"
        id="authentication">
        <UserList :user="authentication_user" />
        <button @click="signOut">
          サインアウト
        </button>
      </div>
      <router-link to="/home">
        Home
      </router-link>|
      <router-link to="/about">
        About
      </router-link>
    </div>
    <div v-if="authentication_status === true">
      <router-view />
    </div>
    <div v-if="authentication_status === false">
      <SignIn />
    </div>
    <div v-if="authentication_status === null">
      <Uncertain />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */

import firebase from 'firebase/app';

import UserList from '@/components/authentication/UserList.vue';
import SignIn from '@/components/authentication/SignIn.vue';
import Uncertain from '@/components/authentication/Uncertain.vue';

export default {
  name: 'App',
  components: {
    UserList,
    SignIn,
    Uncertain
  },
  computed: {
    authentication_user: function () {
      return this.$store.state.user;
    },
    authentication_status: function () {
      return this.$store.state.status;
    }
  },
  mounted: function () {
    firebase.auth().onAuthStateChanged(this.authStateChanged);
  },
  methods: {
    signOut: function () {
      firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
        })
        .catch(function (error) {
          console.log('error', error);
        });
    },
    authStateChanged: function (user) {
      if (user) {
        console.table(user);
        this.$store.commit('signIn', user);
      } else {
        this.$store.commit('signOut');
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
#authentication {
  border: 1px solid blue;
  background-color: #fafaff;
  margin: 1rem;
  padding: 1rem;
}
</style>
