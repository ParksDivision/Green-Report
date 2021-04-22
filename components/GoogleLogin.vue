<template>
  <button v-google-signin-button="clientId" class="google-signin-button">
    Continue with Google
  </button>
</template>

<script>
import GoogleSignInButton from "vue-google-signin-button-directive";
export default {
  data: () => ({
    clientId:
      "625910950860-otlptp54tf0do72frvgmuf53vgq3qgle.apps.googleusercontent.com"
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log('ID TOKEN:',idToken);
      // Receive the idToken and make your magic with the backend
      this.$router.push('/dashboard')
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.google-signin-button {
  color: white;
  background-color: rgb(0, 102, 255);
  display: inline-block;
  padding: 1em 1.5em 2em 1.5em !important;
  height: 50px;
  font-size: 16px;
  -webkit-border-radius: 13;
  -moz-border-radius: 13;
  border-radius: 13px;
  padding: 10px 20px 25px 20px;
   &:hover {
     background-color: rgb(6, 47, 109);
   }
}
</style>
