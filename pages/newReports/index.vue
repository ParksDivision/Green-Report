<template>
  <div class="form-container">
    <h3>New Reports</h3>
    <div v-for="report in reports" v-bind:key="report.id">
      <NewReportCard :productInfo = report :userEmail = user.email></NewReportCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getUserFromCookie, getUserFromSession } from '@/helpers';

export default Vue.extend({
  data(): { user: firebase.User | null, reports: Array<any>} {
    return {
      user: null,
      reports: [],
     }
  },
  asyncData({ req, redirect }): { user: firebase.User | null }  {
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
    }
    return {
      user: user
    };
  },
  created() {
    // Redirect the user away if they have insuffiecent privlages
    if (this.user) {
      this.$checkModPermissions(this.user.email)
      .then(response => {
        //console.log('Debug!', response.data)
        if(response.data === 'false') this.$router.push('/')
        .catch(failure => {console.error(failure)});
      });
      // If the user has correct privlages, fetch the newReports data
    this.$getNewReports()
      .then(response => this.reports = response.data);
    }
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
  .form-container {
    margin-top: 2em;
  }
</style>
