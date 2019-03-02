<template>
  <div>
    <h1>サインイン</h1>
    <p>ソーシャルログイン</p>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script>
import firebase from 'firebase/app'
// import firebaseui from "firebaseui"; // 英語版
import firebaseui from 'firebaseui-ja' // 日本語版
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'SignIn',
  mounted: function () {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    const options = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ]
    }
    ui.start('#firebaseui-auth-container', options)
  }
}
</script>

<style scoped>
</style>
