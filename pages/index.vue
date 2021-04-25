<template>
  <div class="">
    <div>
      <h1 class="title">Welcome To Green Report</h1>
      <div class="container">
        <CategoryCard />
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo TODO: remove unused code
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 2em auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  text-align: center;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
