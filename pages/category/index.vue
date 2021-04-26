<template>
  <h2>{{category.categoryName}}</h2>
</template>

<script>
export default {
  props: {
    category: {
        //type: String,
        default: 'Prop not found'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>