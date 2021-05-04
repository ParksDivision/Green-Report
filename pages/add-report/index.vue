<template>
  <div class="form-container">
    <h2> Enter product information </h2>
    <form id="newReportForm" @submit.prevent="pressed">
      <div class="productInfo">
        <h4>Name of the product (Leave blank if report is for a company)</h4>
        <input v-model="productName" defaultValue="myName"  type="text"/>
      </div>
      <div class="productInfo">
        <h4>Product company or producer. If there are multiple, seperate them with commas</h4>
        <input v-model="productCompany" placeholder="Producer / company name" type="text" required/>
      </div>
      <div class="flagging-reason">
        <h4>Flagging reason: Feel free to include a link if you have a source</h4>
        <textarea v-model="reasonForFlagging" placeholder="Reason for reporting" type="text" required/>
      </div>
      <h4>What category is this product?</h4>
      <select v-model="productCategory" required>
        <!-- TODO: fetch this info from the server -->
        <option>Beauty Product</option>
        <option>Cleaning Product</option>
        <option>Clothing</option>
        <option>Food And Drink</option>
        <option>Health Product</option>
      </select>
      <button>Submit</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'

let user: any = null;

export default Vue.extend({
  async created() {
    if (!user) this.$router.push('/');
  },
  // Get the user object, redirect to login if user is signed out
  asyncData({ req, redirect }) {
    if (process.server) {
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
      productCategory: '',
      error: '',
    }
  },
  methods: {
    pressed() {
      if (user) {
        this.$postGreenReport(
          this.productName,
          this.productCompany,
          this.reasonForFlagging,
          this.productCategory,
          user.email
        )
        this.productName = ''
        this.productCompany = ''
        this.reasonForFlagging = ''
        this.productCategory = ''
      }
    }
  }
})
</script>
<style lang="scss" scoped>
.form-container {
    margin-top: 2em;
  }
  input, textarea {
    padding: .5empx .5em;
    width: 35vw;
  }
  .error {
    color: red;
  }
</style>
