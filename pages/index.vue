<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Green-Report
      </h1>
      <GoogleLogin />
    </div>
  </div>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->

<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
<!-- Firebase authentication -->
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-auth.js"></script>
<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkPfCajEYToFWNWHPtysaqKSXSaYdS3So",
  authDomain: "green-report.firebaseapp.com",
  projectId: "green-report",
  storageBucket: "green-report.appspot.com",
  messagingSenderId: "625910950860",
  appId: "1:625910950860:web:e5582f3fc80f8fd0eb0b69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
</script>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";
export default Vue.extend({});
</script>


<style  lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
