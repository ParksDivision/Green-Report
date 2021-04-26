<template>
  <div>
    <h3>New Reports</h3>
    <!-- <ul>
      <li v-for="report in reports" v-bind:key="report.id">
        <ul class = product-details>
          <li>Name: {{report.productName}}</li>
          <li>Product Company: {{report.productCompany.toString()}}</li>
          <li>Reason for flagging: {{report.reasonForFlagging}}</li>
          <li>Contributed By: {{report.contributedBy}}</li>
          <li>Report ID: {{report.id}}</li>
          <li>Created At: {{report.createdAt}}</li>
        </ul>
      </li>
    </ul> -->
    <div v-for="report in reports" v-bind:key="report.id">
      <NewReportCard :productInfo = report></NewReportCard>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie, getUserFromSession } from '@/helpers';
export default {
  data() {
    return {
      user: null,
      reports: []
     }
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
    }
    return {
      user: user
     }
  },
  created() {
    // Redirect the user away if they have insuffiecent privlages
    if (this.user) {
      this.$checkModPermissions(this.user.email)
      .then(response => {
        if(!response.data ) redirect('/login')
      });
      // If the user has correct privlages, fetch the newReports data
    this.$getNewReports()
      .then(response => this.reports = response.data);
    }
  }
}
</script>

<style lang="scss" scoped></style>
