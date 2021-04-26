<template>
  <div>
    <h3>New Reports</h3>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie, getUserFromSession } from '@/helpers';
export default {
  data() {
    return { user: null }
  },
  asyncData({ req, redirect }) {
    let user = null
    if (process.server) {
      console.log('server', req.headers) //TODO: Remove console.log
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
    this.$checkModPermissions(user.email)
      .then(response => {
        if(!response.data ) redirect('/login')
      });
    return { user: user }
  }
}
</script>

<style lang="scss" scoped></style>
