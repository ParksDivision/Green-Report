<template>
  <div class="search-bar">
    <form>
      <input v-model="keyword" type="text" @keyup="debounceLookup(keyword)" placeholder="Search a product or company">
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
var { debounce } = require('lodash');
export default {
  data() {
    return {
      keyword: '',
      results: []
    }
  },
  methods: {
    debounceLookup: debounce(function (key) {
      if(key.length === 0) {
        this.results = [];
        return;
      }
      this.$searchReports(key)
      .then(response => this.results = response.data)
    }, 300)
  }
}
</script>

<style lang="scss" scoped>
  .results-area {
    background-color: lime;
    position: relative;
    left: 8em;
    border: 1px black solid;
  }
  .hidden {
    display: none;
  }
</style>
