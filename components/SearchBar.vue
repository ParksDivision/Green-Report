<template>
  <div class="search-bar">
    <form>
      <input v-model="keyword" type="text" @keyup="debounceLookup(keyword)" placeholder="Search a product or company">
    </form>
    <div :class=" (results.length) ? 'results-area' : 'hidden'">
      <div v-for="result of results" v-bind:key=result>
        {{result}}
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
      results: ['asdf']
    }
  },
  methods: {
    debounceLookup: debounce(function (key) {
    console.log(key);
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