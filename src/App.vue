<template>
  <div id="app">
    <div id="nav">
      <div
        v-if="authentication_status"
        id="authentication">
        <User :user="authentication_user" />
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
import firebase from 'firebase/app';

import User from '@/components/authentication/User.vue';
import SignIn from '@/components/authentication/SignIn.vue';
import Uncertain from '@/components/authentication/Uncertain.vue';

export default {
  name: 'App',
  components: {
    User,
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
    checkAuth: function () {
      firebase
        .auth()
        .currentUser.getIdToken()
        .then(function (token) {
          fetch('/functions', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(res => {
              console.log(res.json());
            })
            .catch(e => {
              console.log(e);
            });
        });
    },
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
        this.$store.commit('signIn', user);
        console.log(user);
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
