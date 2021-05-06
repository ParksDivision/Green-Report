<template>
  <ul>
    <li v-bind:key="category.categoryName"  v-for="category in categories">
      <NuxtLink :to="'category/'+category.categoryName.replace(/ /g, '-')">
        <div class="category-card">
          <img v-bind:src=category.categoryImage />
          {{category.categoryName}}
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CategoryCard',
  props: ['categoryName'],
  data(): { categories: null | []; } {
    return {
      categories: null
      }
  },
  beforeCreate(): void {
    // console.log(this);
    this.$getCategories()
    .then(categories => {this.$data.categories = categories.data});
  }
})
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
    box-shadow: 3px 3px 2px lightgray;
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