<template>
  <div>
    <h2> Enter product information </h2>
    <form id="newReportForm" @submit.prevent="pressed">
      <div class="productInfo">
        <input v-model="productName" placeholder="Product name"  type="text"/>
      </div>
      <div class="productInfo">
        <input v-model="productCompany" placeholder="Producer / company name" type="text"/>
      </div>
      <div class="flagging-reason">
        <input v-model="reasonForFlagging" placeholder="Reason for reporting" type="text"/>
      </div>
      <button>Submit</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
let user = null;
export default {
  async created() {
    if (!user) this.$router.push('/');
  },
  // Get the user object, redirect to login if user is signed out
  asyncData({ req, redirect }) {
    if (process.server) {
      console.log('server', req.headers)
      user = getUserFromCookie(req);
      //   console.log('b', getUserFromCookie(req))
      if (!user) {
        redirect('/login')
      }
    } else {
      user = firebase.auth().currentUser
      if (!user) {
        redirect('/login');
      }
      //   console.log($nuxt.$router)
    }
    return { user: user }
  },
  data() {
    return {
      user: user,
      productName: '',
      productCompany: '',
      reasonForFlagging: '',
      error: '',
      contributedBy: '',
    }
  },
  methods: {
    pressed() {
      if (user) {
        this.$postGreenReport(
          this.productName,
          this.productCompany,
          this.reasonForFlagging,
          this.contributedBy,
          user.email
        )
      } else {
        console.log(user)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
