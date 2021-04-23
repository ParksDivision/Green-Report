<template>
  <div>
    <h3>Profile Route</h3>
    <h2 v-if="user">{{ user.email }}</h2>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
export default {
  data() {
    return { user: null }
  },
  asyncData({ req, redirect }) {
    let user = null
    if (process.server) {
      console.log('server', req.headers)
      user = getUserFromCookie(req)
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        redirect('/login')
      }
    } else {
      user = firebase.auth().currentUser
      if (!user) {
        redirect('/login')
      }
      //   console.log($nuxt.$router)
    }
    return { user: user }
  }
}
</script>

<style lang="scss" scoped></style>
