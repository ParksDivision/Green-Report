<template>
  <div>
    <h3>{{$route.params.categoryName.replace(/-/g, ' ')}}</h3>
    <ul>
      <li v-bind:key="report.id" v-for="report in reports" class="green-report">
        <div>{{report.productName}}</div>
        <div>{{report.productCompany.toString()}}</div>
        <div>{{convertDate(report.createdAt)}}</div>
        <div>{{report.reasonForFlagging}}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const moment = require('moment');

export default Vue.extend({
  data() {
    return {
      reports: null
      }
  },
  created() {
    this.$getAllInCategory(this.$route.params.categoryName)
    .then((res) => {
      this.reports = res.data
      console.log(res)
    });
  },
  methods: {
    convertDate(date: any) {
      return moment(date)
    }
  }
})
</script>

<style lang="scss" scoped>
li {
  margin: 1em;
  background-color: #FFF;
  padding: 2em;
}
</style>
