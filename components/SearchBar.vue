<template>
  <div>
    <form>
      <input v-model="keyword" type="text" @keyup="debounceLookup(keyword)" class="search-bar" placeholder="Search a product or company">
    </form>
    <div :class=" (results.length) ? 'results-area' : 'hidden'">
      <div v-for="result of results" v-bind:key=result.id>
        <p v-if="result.productName">{{result.productName}}</p>
        <p v-else>{{result.productCompany.toString()}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// The only use of Lodash, since Nuxt2 has broken debounce property
const { debounce } = require('lodash');

export default {
  data() {
    return {
      keyword: '',
      results: []
    }
  },
  methods: {
    debounceLookup:
      debounce(function (key) {
      if(key.length === 0) {
        this.results = [];
        return;
      }
      this.$searchReports(key)
      .then(response => {
        return this.results = response.data;
      })
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
  .search-bar {
    width: 40vw;
  }
  .results-area {
    background-color: lightgray;
    float: right;
    position: relative;
    padding: 0em 1em;
    left: 4em;
    border: 1px black solid;
  }
  .hidden {
    display: none;
  }
  input {
  padding: 15px;
  font-size: 18px;
}
</style>
