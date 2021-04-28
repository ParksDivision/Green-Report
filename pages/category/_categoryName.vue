<template>
  <div>
    <h3>{{$route.params.categoryName.replace(/-/g, ' ')}}</h3>
    <ul>
      <li v-bind:key="report.id" v-for="report in reports">
        <div>{{report.productName}}</div>
        <div>{{report.productCompany.toString()}}</div>
        <div>{{report.productCategory}}</div>
        <div>{{report.reasonForFlagging}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reports: null
      }
  },
  created() {
    this.$getAllInCategory(this.$route.params.categoryName)
    .then(res => {
      this.reports = res.data
      console.log(res)
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
