<template>
  <ul>
    <li v-bind:key="category.categoryName"  v-for="category in categories">
      <NuxtLink :to="{path:'category', params:category.categoryName}">
        <div class="category-card">
          <img v-bind:src=category.categoryImage />
          {{category.categoryName}}
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
data() {
    return {categories: null}
  },
  beforeCreate() {
    this.$getCategories()
    .then(categories => {this.categories = categories.data});
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 7em;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    height:20vh;
    margin: 1em;
  }
  img {
    width: 20vh;
    height: 20vh;
    object-fit: cover;
  }
  .category-card {
    width: 20vh;
    height: 20vh;
    display: inline-block;
    text-align: center;
    vertical-align: bottom;
  }
  .category-card{
    background-color: greenyellow;
  }
</style>