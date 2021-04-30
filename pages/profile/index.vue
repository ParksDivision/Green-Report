<template>
  <div>
    <h3>Profile Route</h3>
    <h2 v-if="user">{{ user.email }}</h2>
  </div>
</template>

<script lang="ts">
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie, getUserFromSession } from '@/helpers';
import Vue from 'vue'

export default Vue.extend({
  data(): { user: firebase.User | null } { 
    return { user: null }
  },
  asyncData({ req, redirect }): { user: firebase.User | null } {
    let user = null
    if (process.server) {
      user = getUserFromCookie(req);
      if (!user) {
        redirect('/login');
      }
    } else {
      user = firebase.auth().currentUser;
      if (!user) {
        redirect('/login');
      }
      //   console.log($nuxt.$router)
    }
    return { user: user }
  }
})
</script>

<style lang="scss" scoped></style>
