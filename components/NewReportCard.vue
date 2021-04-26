<template>
  <div>
    <form id="newReportForm" @submit.prevent>
      <div class="productInfo">
        <h4>Name of the product</h4>
        <input v-model="productName" defaultValue="myName"  type="text" required/>
      </div>
      <div class="productInfo">
        <h4>Product company or producer. If there are multiple, seperate them with commas</h4>
        <input v-model="productCompany" type="text" required/>
      </div>
      <div class="flagging-reason">
        <h4>Flagging reason: Feel free to include a link if you have a source</h4>
        <textarea v-model="reasonForFlagging" placeholder="Reason for reporting" type="text" required/>
      </div>
      <h4>What category is this product?</h4>
      <select v-model="productCategory" required>
        <option>Beauty Product</option>
        <option>Cleaning Product</option>
        <option>Clothing</option>
        <option>Food And Drink</option>
        <option>Health Product</option>
      </select>
      <div>
        <button @click="submit()">Submit</button>
        <button @click="remove()">Delete</button>
      </div>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { getUserFromCookie, getUserFromSession } from '@/helpers'
export default {
  props: {
    productInfo: {
      type: Object,
      productName: {
        type: String,
        required: true,
      },
      productCompany: {
        type: String,
        required: true,
      },
      reasonForFlagging: {
        type: String,
        required: true,
      },
      productCategory: {
        type: Array,
        required: true,
      }
    }
  },
  data: function() {
      return {
        productName: this.productInfo.productName,
        productCompany: this.productInfo.productCompany,
        reasonForFlagging: this.productInfo.reasonForFlagging,
        productCategory: this.productInfo.productCategory,
        error: ''
      }

  },
  methods: {
    submit() {
      console.log('Submit!', this.productInfo)
    },
    remove() {
      console.log('Remove!', this.productInfo)
    }
  }
}
</script>

<style lang="scss" scoped></style>
